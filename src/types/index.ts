export interface Facility {
  id: string;
  title: string;
  category: 'juegos' | 'salon' | 'exterior' | 'servicios';
  description: string;
  highlights: string[];
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'instalaciones' | 'cumples' | 'animacion' | 'mesas';
  description: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  included: boolean;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  email?: string;
  eventDate: string;
  timeSlot: 'tarde' | 'noche' | 'personalizado';
  celebrantName: string;
  celebrantAge: string;
  kidsCount: string;
  adultsCount: string;
  additionalServices: string[];
  comments?: string;
}
