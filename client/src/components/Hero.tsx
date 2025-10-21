import { Button } from '@/components/ui/button';
import heroImage from '@assets/branding/hero-athlete.jpg';
import logoImage from '@assets/branding/logo-red-bg.jpg';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img 
          src={logoImage} 
          alt="Almighty Gnz - Unleash Your Power" 
          className="w-64 md:w-96 mx-auto mb-6 drop-shadow-2xl"
          data-testid="img-hero-logo"
        />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight" data-testid="text-hero-title">
          UNLEASH YOUR <span className="text-primary">POWER</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto font-bold" data-testid="text-hero-subtitle">
          Premium supplements for champions who refuse to settle
        </p>
        <Button 
          size="lg"
          className="text-lg px-10 py-7 h-auto font-bold shadow-xl hover:shadow-2xl transition-shadow"
          onClick={scrollToProducts}
          data-testid="button-shop-now"
        >
          SHOP NOW
        </Button>
      </div>
    </section>
  );
}
