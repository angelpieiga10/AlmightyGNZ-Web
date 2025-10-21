import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-about-title">
              About Almighty Gnz
            </h3>
            <p className="text-sm text-muted-foreground">
              Premium sports supplements designed for athletes and fitness enthusiasts who demand the best.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-links-title">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                  Home
                </a>
              </Link>
              <Link href="/#products">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-products">
                  Products
                </a>
              </Link>
              <Link href="/cart">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-cart">
                  Cart
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-contact-title">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:info@almightygnz.com" className="flex items-center gap-2 hover:text-foreground transition-colors" data-testid="link-footer-email">
                <Mail className="h-4 w-4" />
                info@almightygnz.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-foreground transition-colors" data-testid="link-footer-phone">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                123 Fitness Ave, Gym City
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <a 
                href="#" 
                className="hover-elevate active-elevate-2 rounded-full p-2 bg-muted" 
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover-elevate active-elevate-2 rounded-full p-2 bg-muted" 
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover-elevate active-elevate-2 rounded-full p-2 bg-muted" 
                aria-label="Twitter"
                data-testid="link-footer-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} Almighty Gnz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
