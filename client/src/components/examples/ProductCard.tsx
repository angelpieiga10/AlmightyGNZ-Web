import ProductCard from '../ProductCard';
import { CartProvider } from '@/contexts/CartContext';
import proteinImage from '@assets/branding/product-protein.jpg';

export default function ProductCardExample() {
  return (
    <CartProvider>
      <div className="p-4 max-w-sm">
        <ProductCard
          id="1"
          name="Whey Protein 1kg"
          description="Premium whey protein isolate for muscle recovery and explosive growth"
          price={49.99}
          image={proteinImage}
          weight="1kg"
        />
      </div>
    </CartProvider>
  );
}
