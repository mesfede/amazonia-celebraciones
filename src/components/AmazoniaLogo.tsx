import React from 'react';
import logoImg from './Amazonia_logo_ok.png';

interface AmazoniaLogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

export const AmazoniaLogo: React.FC<AmazoniaLogoProps> = ({
  className = 'h-14',
  variant = 'color',
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Amazonia Celebraciones"
        className={`w-full h-full object-contain max-h-16 ${
          variant === 'white' ? 'brightness-0 invert drop-shadow-md' : 'drop-shadow-sm'
        }`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
