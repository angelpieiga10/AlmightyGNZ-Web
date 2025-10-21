import ProductCard from '../ProductCard';
import { CartProvider } from '@/contexts/CartContext';
import wheyImage from '@assets/generated_images/Whey_protein_product_image_1ec7ad35.png';

export default function ProductCardExample() {
  return (
    <CartProvider>
      <div className="p-4 max-w-sm">
        <ProductCard
          id="1"
          name="Whey Protein 1kg"
          description="Premium whey protein isolate for muscle recovery"
          price={49.99}
          image={wheyImage}
          weight="1kg"
        />
      </div>
    </CartProvider>
  );
}
