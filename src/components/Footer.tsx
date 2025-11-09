import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary italic">
              YOURS CHOICE
            </h2>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for premium products at the best prices. Shop with confidence!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Shop By Category</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Mobiles & Tablets
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Electronics
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Fashion & Clothing
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Accessories
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Customer Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Returns & Refunds
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Shipping Information
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span>support@yourschoice.com</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>123 Shopping Street, City Center, 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 <span className="text-primary font-semibold">YOURS CHOICE</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
