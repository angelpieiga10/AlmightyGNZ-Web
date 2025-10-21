import ProductCard from './ProductCard';
import wheyImage from '@assets/generated_images/Whey_protein_product_image_1ec7ad35.png';
import creatineImage from '@assets/generated_images/Creatine_product_image_7c3a67b3.png';
import preworkoutImage from '@assets/generated_images/Pre-workout_product_image_5873e9c4.png';
import bcaaImage from '@assets/generated_images/BCAA_recovery_product_image_79402105.png';

const products = [
  {
    id: '1',
    name: 'Whey Protein 1kg',
    description: 'Premium whey protein isolate for muscle recovery and growth',
    price: 49.99,
    image: wheyImage,
    weight: '1kg',
    category: 'protein',
  },
  {
    id: '2',
    name: 'Creatine Monohydrate 300g',
    description: 'Pure creatine monohydrate for strength and performance',
    price: 24.99,
    image: creatineImage,
    weight: '300g',
    category: 'creatine',
  },
  {
    id: '3',
    name: 'Pre-Workout 250g',
    description: 'Energy-boosting pre-workout formula for intense training',
    price: 34.99,
    image: preworkoutImage,
    weight: '250g',
    category: 'pre-workout',
  },
  {
    id: '4',
    name: 'Recovery BCAA 300g',
    description: 'Essential amino acids for faster recovery and endurance',
    price: 29.99,
    image: bcaaImage,
    weight: '300g',
    category: 'recovery',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-products-title">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Premium supplements designed to help you reach your fitness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
