import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <ProductGrid />
    </div>
  );
}
