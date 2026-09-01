import React, { useEffect, useRef, useImperativeHandle, forwardRef, useCallback } from 'react';

export interface ConfettiCanvasHandle {
  burst: (originX?: number, originY?: number, count?: number) => void;
  doubleBurst: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  color: string;
  darkColor: string;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  flutterPhase: number;
  flutterSpeed: number;
  drag: number;
  gravity: number;
  opacity: number;
  life: number;
  maxLife: number;
}

// Brand confetti color palette matching Amazonia & reference styling
const CONFETTI_PALETTE = [
  { main: '#f59e0b', dark: '#d97706' }, // Amber Yellow
  { main: '#fbbf24', dark: '#f59e0b' }, // Bright Yellow
  { main: '#f43f5e', dark: '#e11d48' }, // Rose Red
  { main: '#e11d48', dark: '#be123c' }, // Deep Crimson
  { main: '#0d9488', dark: '#0f766e' }, // Teal
  { main: '#10b981', dark: '#059669' }, // Emerald
  { main: '#f97316', dark: '#ea580c' }, // Tangerine Orange
  { main: '#334155', dark: '#1e293b' }, // Dark Slate Navy
  { main: '#ec4899', dark: '#db2777' }, // Joyful Pink
  { main: '#06b6d4', dark: '#0891b2' }, // Sky Cyan
];

export const ConfettiExplosionCanvas = forwardRef<ConfettiCanvasHandle, { className?: string }>(
  ({ className = '' }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animFrameIdRef = useRef<number | null>(null);
    const isVisibleRef = useRef<boolean>(true);
    const lastTimeRef = useRef<number>(0);
    const autoBurstTimerRef = useRef<number | null>(null);

    // Create a burst of realistic paper confetti
    const createBurst = useCallback((originXRatio = 0.5, originYRatio = 0.3, count = 75) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      const startX = width * originXRatio;
      const startY = height * originYRatio;

      const newParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const colorObj = CONFETTI_PALETTE[Math.floor(Math.random() * CONFETTI_PALETTE.length)];
        
        // Random explosive angle (spread upwards and outwards in a 360/wide fan)
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.5;
        // Explosive initial velocity
        const speed = 7 + Math.random() * 16;
        
        const vx = Math.cos(angle) * speed + (Math.random() - 0.5) * 4;
        const vy = Math.sin(angle) * speed - (Math.random() * 5); // extra upward kick

        // Realistic rectangular paper dimensions (aspect ratio roughly 1:2.5 to 1:3.2)
        const baseSize = 8 + Math.random() * 7;
        const w = baseSize;
        const h = baseSize * (2.2 + Math.random() * 1.2);

        newParticles.push({
          x: startX + (Math.random() - 0.5) * 40,
          y: startY + (Math.random() - 0.5) * 25,
          vx,
          vy,
          w,
          h,
          color: colorObj.main,
          darkColor: colorObj.dark,
          rotationX: Math.random() * Math.PI * 2,
          rotationY: Math.random() * Math.PI * 2,
          rotationZ: Math.random() * Math.PI * 2,
          vRotX: (Math.random() - 0.5) * 0.22,
          vRotY: (Math.random() - 0.5) * 0.28,
          vRotZ: (Math.random() - 0.5) * 0.16,
          flutterPhase: Math.random() * Math.PI * 2,
          flutterSpeed: 0.05 + Math.random() * 0.08,
          drag: 0.965 + Math.random() * 0.02, // realistic air resistance
          gravity: 0.12 + Math.random() * 0.16, // gravity pulling down
          opacity: 1,
          life: 0,
          maxLife: 280 + Math.random() * 180, // lasts through full fall
        });
      }

      particlesRef.current = [...particlesRef.current, ...newParticles];
    }, []);

    // Double cannon blast from left & right corners
    const doubleBurst = useCallback(() => {
      createBurst(0.2, 0.45, 55);
      createBurst(0.8, 0.45, 55);
      createBurst(0.5, 0.2, 45);
    }, [createBurst]);

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      burst: (originX = 0.5, originY = 0.3, count = 75) => {
        createBurst(originX, originY, count);
      },
      doubleBurst: () => {
        doubleBurst();
      },
    }), [createBurst, doubleBurst]);

    // Canvas rendering loop
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      // Handle High DPI / Retina
      const updateSize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
      };

      updateSize();
      window.addEventListener('resize', updateSize);

      // Animation loop with delta time & 3D projection
      const render = (time: number) => {
        if (!isVisibleRef.current) {
          animFrameIdRef.current = requestAnimationFrame(render);
          return;
        }

        const dt = lastTimeRef.current ? Math.min((time - lastTimeRef.current) / 16.66, 2) : 1;
        lastTimeRef.current = time;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const logicalWidth = canvas.width / dpr;
        const logicalHeight = canvas.height / dpr;

        ctx.clearRect(0, 0, logicalWidth, logicalHeight);

        const particles = particlesRef.current;
        const activeParticles: Particle[] = [];

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          p.life += dt;

          // Apply physics
          p.vx *= Math.pow(p.drag, dt);
          p.vy = p.vy * Math.pow(p.drag, dt) + p.gravity * dt;

          // Flutter oscillation (swaying left-right like real falling paper)
          p.flutterPhase += p.flutterSpeed * dt;
          const flutterForceX = Math.sin(p.flutterPhase) * (0.85 + Math.abs(p.vy) * 0.15);
          
          p.x += (p.vx + flutterForceX) * dt;
          p.y += p.vy * dt;

          // 3D rotations
          p.rotationX += p.vRotX * dt;
          p.rotationY += p.vRotY * dt;
          p.rotationZ += p.vRotZ * dt;

          // Fade out gradually near end of life or when exiting canvas bottom
          if (p.life > p.maxLife - 40) {
            p.opacity = Math.max(0, (p.maxLife - p.life) / 40);
          }

          // Keep alive if within view and opacity > 0
          if (p.y < logicalHeight + 60 && p.opacity > 0.02) {
            activeParticles.push(p);

            // Draw realistic 3D tumbling paper
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotationZ);

            // 3D projection scale: simulates paper flipping front to back
            const scaleX = Math.cos(p.rotationY);
            const scaleY = Math.cos(p.rotationX);

            ctx.scale(scaleX, scaleY);
            ctx.globalAlpha = p.opacity * 0.9;

            // Backside shading when flipped
            const isFlipped = scaleX * scaleY < 0;
            ctx.fillStyle = isFlipped ? p.darkColor : p.color;

            // Draw rectangle paper
            const halfW = p.w / 2;
            const halfH = p.h / 2;
            ctx.fillRect(-halfW, -halfH, p.w, p.h);

            // Subtle paper edge sheen
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.lineWidth = 0.75;
            ctx.strokeRect(-halfW, -halfH, p.w, p.h);

            ctx.restore();
          }
        }

        particlesRef.current = activeParticles;

        // Auto ambient gentle drops when idle to keep the party alive!
        if (activeParticles.length < 12 && Math.random() < 0.035) {
          const colorObj = CONFETTI_PALETTE[Math.floor(Math.random() * CONFETTI_PALETTE.length)];
          const baseSize = 8 + Math.random() * 6;
          particlesRef.current.push({
            x: Math.random() * logicalWidth,
            y: -20,
            vx: (Math.random() - 0.5) * 1.5,
            vy: 1.2 + Math.random() * 2.2,
            w: baseSize,
            h: baseSize * (2.2 + Math.random() * 1.2),
            color: colorObj.main,
            darkColor: colorObj.dark,
            rotationX: Math.random() * Math.PI * 2,
            rotationY: Math.random() * Math.PI * 2,
            rotationZ: Math.random() * Math.PI * 2,
            vRotX: (Math.random() - 0.5) * 0.15,
            vRotY: (Math.random() - 0.5) * 0.2,
            vRotZ: (Math.random() - 0.5) * 0.1,
            flutterPhase: Math.random() * Math.PI * 2,
            flutterSpeed: 0.04 + Math.random() * 0.06,
            drag: 0.98,
            gravity: 0.08 + Math.random() * 0.08,
            opacity: 1,
            life: 0,
            maxLife: 320 + Math.random() * 120,
          });
        }

        animFrameIdRef.current = requestAnimationFrame(render);
      };

      animFrameIdRef.current = requestAnimationFrame(render);

      // Initial blast
      createBurst(0.5, 0.25, 80);

      // Clean up
      return () => {
        window.removeEventListener('resize', updateSize);
        if (animFrameIdRef.current) {
          cancelAnimationFrame(animFrameIdRef.current);
        }
        if (autoBurstTimerRef.current) {
          clearInterval(autoBurstTimerRef.current);
        }
      };
    }, [createBurst]);

    return (
      <canvas
        ref={canvasRef}
        className={`pointer-events-none absolute inset-0 w-full h-full z-10 ${className}`}
      />
    );
  }
);

ConfettiExplosionCanvas.displayName = 'ConfettiExplosionCanvas';
