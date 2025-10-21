import ProductGrid from '../ProductGrid';
import { CartProvider } from '@/contexts/CartContext';

export default function ProductGridExample() {
  return (
    <CartProvider>
      <ProductGrid />
    </CartProvider>
  );
}
