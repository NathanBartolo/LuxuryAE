import brandPlaceholder from '../assets/brands/brand-placeholder.svg';
import finoLogo from '../assets/brands/fino.png';
import marvisLogo from '../assets/brands/marvis.png';
import prorasoLogo from '../assets/brands/proraso.png';
import shiseidoLogo from '../assets/brands/shiseido.png';

export const brands = [
  { id: 'brand-1', name: 'Fino', logo: finoLogo || brandPlaceholder },
  { id: 'brand-2', name: 'Marvis', logo: marvisLogo || brandPlaceholder },
  { id: 'brand-3', name: 'Proraso', logo: prorasoLogo || brandPlaceholder },
  { id: 'brand-4', name: 'Shiseido', logo: shiseidoLogo || brandPlaceholder },
];
