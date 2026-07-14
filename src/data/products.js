import shampooImage from '../assets/products/Shiseido Fino Premium Touch Moisturizing Hair Shampoo 550ml – luxury uae_files/Shiseido_Fino_Premium_Touch_Shampoo_550ml.webp';
import finoBrandImage from '../assets/brands/fino.png';
import shiseidoBrandImage from '../assets/brands/shiseido.png';
import marvisBrandImage from '../assets/brands/marvis.png';
import marvisProductImage from '../assets/products/Marvis Ginger Mint Toothpaste - Revitalizing Oral Care Experience – luxury uae_files/comp_MARVIS_GINGER_25ML_F_T.png';
import blogImage from '../assets/blog/hf_20260611_064541_55c6099c-c412-4938-a589-3e35efd8db80.webp';
import prorasoBrandImage from '../assets/brands/proraso.png';

export const products = {
  hairCare: [
    {
      id: 'hair-1',
      brand: 'Shiseido Fino',
      name: 'Fino Premium Touch Moisturizing Hair Shampoo 550ml',
      price: 89,
      image: shampooImage,
      alt: 'Fino Premium Touch Moisturizing Hair Shampoo bottle',
    },
    {
      id: 'hair-2',
      brand: 'Fino Shiseido',
      name: 'Premium Touch Hair Oil',
      price: 99,
      image: finoBrandImage,
      alt: 'Fino brand logo used as a visual placeholder',
    },
    {
      id: 'hair-3',
      brand: 'Shiseido Fino',
      name: 'Premium Touch Hair Mask 230g',
      price: 82,
      image: shiseidoBrandImage,
      alt: 'Shiseido brand logo used as a visual placeholder',
    },
  ],
  oralCare: [
    {
      id: 'oral-1',
      brand: 'Marvis',
      name: 'Amarelli Licorice Mint Toothpaste 25ml',
      price: 31,
      image: marvisBrandImage,
      alt: 'Marvis brand logo used as a visual placeholder',
    },
    {
      id: 'oral-2',
      brand: 'Marvis',
      name: 'Ginger Mint Toothpaste 25ml',
      price: 31,
      image: marvisProductImage,
      alt: 'Marvis Ginger Mint Toothpaste 25ml tube',
    },
    {
      id: 'oral-3',
      brand: 'Marvis',
      name: 'Jasmin Mint Toothpaste 25ml',
      price: 31,
      image: blogImage,
      alt: 'Luxury editorial image used as a visual placeholder',
    },
    {
      id: 'oral-4',
      brand: 'Marvis',
      name: 'Jasmin Mint Toothpaste 75ml',
      price: 47,
      image: prorasoBrandImage,
      alt: 'Proraso brand logo used as a visual placeholder',
    },
  ],
};
