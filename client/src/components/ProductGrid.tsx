import ProductCard from './ProductCard';
import proteinImage from '@assets/branding/product-protein.jpg';
import creatineImage from '@assets/branding/product-creatine.jpg';
import preworkoutImage from '@assets/branding/product-preworkout.jpg';
import bcaaImage from '@assets/branding/product-bcaa.jpg';

const products = [
  {
    id: '1',
    name: 'Whey Protein 1kg',
    description: 'Premium whey protein isolate for muscle recovery and explosive growth',
    price: 49.99,
    image: proteinImage,
    weight: '1kg',
    category: 'protein',
  },
  {
    id: '2',
    name: 'Creatine Monohydrate 300g',
    description: 'Pure creatine monohydrate for maximum strength and performance',
    price: 24.99,
    image: creatineImage,
    weight: '300g',
    category: 'creatine',
  },
  {
    id: '3',
    name: 'Pre-Workout 250g',
    description: 'Explosive energy-boosting formula for intense training sessions',
    price: 34.99,
    image: preworkoutImage,
    weight: '250g',
    category: 'pre-workout',
  },
  {
    id: '4',
    name: 'Recovery BCAA 300g',
    description: 'Essential amino acids for rapid recovery and endurance',
    price: 29.99,
    image: bcaaImage,
    weight: '300g',
    category: 'recovery',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight" data-testid="text-products-title">
            OUR <span className="text-primary">ARSENAL</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium" data-testid="text-products-subtitle">
            Premium supplements engineered for champions
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
