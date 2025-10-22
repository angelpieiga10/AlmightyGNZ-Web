import proteinImage from '@assets/branding/product-protein.jpg';
import creatineImage from '@assets/branding/product-creatine.jpg';
import preworkoutImage from '@assets/branding/product-preworkout.jpg';
import bcaaImage from '@assets/branding/product-bcaa.jpg';
import bottle1 from '@assets/gear/Lucid_Origin_a_cinematic_photo_of_Create_a_realistic_highquali_0.jpg';
import bottle2 from '@assets/gear/Lucid_Origin_a_cinematic_photo_of_Create_a_realistic_highquali_1.jpg';
import straps1 from '@assets/gear/Lucid_Origin_a_cinematic_photo_of_Create_a_realistic_highquali_2.jpg';
import straps2 from '@assets/gear/Lucid_Origin_a_cinematic_photo_of_Create_a_realistic_highquali_3.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'supplements' | 'merchandising' | 'gear';
  subcategory?: string;
  weight?: string;
}

export const products: Product[] = [
  // Sports Supplements
  {
    id: '1',
    name: 'Whey Protein 1kg',
    description: 'Premium whey protein isolate for muscle recovery and explosive growth',
    price: 49.99,
    image: proteinImage,
    category: 'supplements',
    subcategory: 'protein',
    weight: '1kg',
  },
  {
    id: '2',
    name: 'Creatine Monohydrate 300g',
    description: 'Pure creatine monohydrate for maximum strength and performance',
    price: 24.99,
    image: creatineImage,
    category: 'supplements',
    subcategory: 'creatine',
    weight: '300g',
  },
  {
    id: '3',
    name: 'Pre-Workout 250g',
    description: 'Explosive energy-boosting formula for intense training sessions',
    price: 34.99,
    image: preworkoutImage,
    category: 'supplements',
    subcategory: 'pre-workout',
    weight: '250g',
  },
  {
    id: '4',
    name: 'Recovery BCAA 300g',
    description: 'Essential amino acids for rapid recovery and endurance',
    price: 29.99,
    image: bcaaImage,
    category: 'supplements',
    subcategory: 'bcaa',
    weight: '300g',
  },
  
  // GNZ Gear
  {
    id: '5',
    name: 'Almighty Gnz Water Bottle - Black',
    description: 'Premium 1L stainless steel water bottle with gorilla logo',
    price: 19.99,
    image: bottle1,
    category: 'gear',
    subcategory: 'bottles',
  },
  {
    id: '6',
    name: 'Almighty Gnz Water Bottle - Red',
    description: 'Premium 1L stainless steel water bottle in signature red',
    price: 19.99,
    image: bottle2,
    category: 'gear',
    subcategory: 'bottles',
  },
  {
    id: '7',
    name: 'Professional Lifting Straps',
    description: 'Heavy-duty cotton lifting straps with reinforced stitching',
    price: 14.99,
    image: straps1,
    category: 'gear',
    subcategory: 'straps',
  },
  {
    id: '8',
    name: 'Premium Wrist Wraps',
    description: 'Professional-grade wrist support for heavy lifting',
    price: 16.99,
    image: straps2,
    category: 'gear',
    subcategory: 'straps',
  },
  
  // Merchandising
  {
    id: '9',
    name: 'Almighty Gnz T-Shirt',
    description: 'Premium cotton t-shirt with bold gorilla logo print',
    price: 29.99,
    image: proteinImage,
    category: 'merchandising',
    subcategory: 'apparel',
  },
  {
    id: '10',
    name: 'Almighty Gnz Snapback',
    description: 'Adjustable snapback cap with embroidered logo',
    price: 24.99,
    image: creatineImage,
    category: 'merchandising',
    subcategory: 'accessories',
  },
];

export const categories = [
  { id: 'all', name: 'All Products', category: null, subcategory: null },
  { id: 'supplements', name: 'Sports Supplements', category: 'supplements', subcategory: null },
  { id: 'protein', name: 'Protein', category: 'supplements', subcategory: 'protein' },
  { id: 'creatine', name: 'Creatine', category: 'supplements', subcategory: 'creatine' },
  { id: 'pre-workout', name: 'Pre-Workout', category: 'supplements', subcategory: 'pre-workout' },
  { id: 'bcaa', name: 'BCAA', category: 'supplements', subcategory: 'bcaa' },
  { id: 'gear', name: 'GNZ Gear', category: 'gear', subcategory: null },
  { id: 'bottles', name: 'Water Bottles', category: 'gear', subcategory: 'bottles' },
  { id: 'straps', name: 'Lifting Straps', category: 'gear', subcategory: 'straps' },
  { id: 'merchandising', name: 'Merchandising', category: 'merchandising', subcategory: null },
];
