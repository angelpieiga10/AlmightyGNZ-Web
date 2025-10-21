import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Athletic_gym_hero_image_cdff65ec.png';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
          Fuel Your Greatness
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
          Premium sports supplements to power your performance and recovery
        </p>
        <Button 
          size="lg"
          className="text-lg px-8 py-6 h-auto"
          onClick={scrollToProducts}
          data-testid="button-shop-now"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
}
