import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-neon-glow rounded-lg animate-pulse-glow"></div>
              <h2 className="text-xl font-orbitron font-bold bg-gradient-neon-glow bg-clip-text text-transparent">
                YOURS CHOICE
              </h2>
            </div>
            <p className="text-muted-foreground">
              Experience the future of shopping with our cutting-edge collection of premium products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neon-cyan hover:text-neon-magenta transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neon-cyan hover:text-neon-magenta transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neon-cyan hover:text-neon-magenta transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-orbitron font-semibold text-neon-cyan">Categories</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">
                Mobiles
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">
                Electronics
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">
                Clothing
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">
                Accessories
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-orbitron font-semibold text-neon-magenta">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-neon-magenta transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-magenta transition-colors">
                Returns
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-magenta transition-colors">
                Shipping Info
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-magenta transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-orbitron font-semibold text-neon-green">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-neon-green" />
                <span>support@yourschoice.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-neon-green" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-neon-green" />
                <span>123 Future St, Cyber City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 <span className="text-neon-cyan font-orbitron">YOURS CHOICE</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;