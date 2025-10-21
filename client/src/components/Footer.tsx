import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import logoImage from '@assets/branding/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <img 
              src={logoImage} 
              alt="Almighty Gnz Logo" 
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-background/80">
              Premium sports supplements for champions who refuse to settle.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-links-title">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-home">
                Home
              </Link>
              <Link href="/#products" className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-products">
                Products
              </Link>
              <Link href="/cart" className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-cart">
                Cart
              </Link>
              <Link href="/contact" className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-contact">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-contact-title">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-sm text-background/80">
              <a href="mailto:info@almightygnz.com" className="flex items-center gap-2 hover:text-background transition-colors" data-testid="link-footer-email">
                <Mail className="h-4 w-4" />
                info@almightygnz.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-background transition-colors" data-testid="link-footer-phone">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                123 Fitness Ave, Gym City
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="hover-elevate active-elevate-2 rounded-full p-3 bg-background/10 border border-background/20" 
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover-elevate active-elevate-2 rounded-full p-3 bg-background/10 border border-background/20" 
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover-elevate active-elevate-2 rounded-full p-3 bg-background/10 border border-background/20" 
                aria-label="Twitter"
                data-testid="link-footer-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} Almighty Gnz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
