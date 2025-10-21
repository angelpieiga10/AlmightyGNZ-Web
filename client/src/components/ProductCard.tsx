import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  weight: string;
}

export default function ProductCard({ id, name, description, price, image, weight }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, weight });
    toast({
      title: 'Added to cart',
      description: `${name} has been added to your cart`,
    });
  };

  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-product-${id}`}>
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={`${name} - ${weight} supplement container`}
          className="w-full h-full object-cover"
          data-testid={`img-product-${id}`}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1" data-testid={`text-product-name-${id}`}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2" data-testid={`text-product-description-${id}`}>
          {description}
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          {weight}
        </p>
        <p className="text-2xl font-bold text-primary" data-testid={`text-product-price-${id}`}>
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          onClick={handleAddToCart}
          data-testid={`button-add-to-cart-${id}`}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
