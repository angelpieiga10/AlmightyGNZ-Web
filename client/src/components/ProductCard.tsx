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
    <Card className="overflow-hidden hover-elevate border-2" data-testid={`card-product-${id}`}>
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted to-background">
        <img 
          src={image} 
          alt={`${name} - ${weight} supplement container`}
          className="w-full h-full object-cover"
          data-testid={`img-product-${id}`}
        />
      </div>
      <CardContent className="p-5">
        <h3 className="font-black text-xl mb-2 tracking-tight" data-testid={`text-product-name-${id}`}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2 leading-relaxed" data-testid={`text-product-description-${id}`}>
          {description}
        </p>
        <p className="text-sm text-muted-foreground font-semibold mb-3">
          {weight}
        </p>
        <p className="text-3xl font-black text-primary" data-testid={`text-product-price-${id}`}>
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button 
          className="w-full font-bold"
          onClick={handleAddToCart}
          data-testid={`button-add-to-cart-${id}`}
        >
          ADD TO CART
        </Button>
      </CardFooter>
    </Card>
  );
}
