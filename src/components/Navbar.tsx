import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 w-full backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-neon-glow rounded-lg animate-pulse-glow"></div>
            <h1 className="text-2xl font-orbitron font-bold bg-gradient-neon-glow bg-clip-text text-transparent">
              YOURS CHOICE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-neon-cyan transition-colors">
              Mobiles
            </a>
            <a href="#" className="text-foreground hover:text-neon-cyan transition-colors">
              Electronics
            </a>
            <a href="#" className="text-foreground hover:text-neon-cyan transition-colors">
              Clothing
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-10 glass border-white/20 focus:border-neon-cyan focus:glow-cyan"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="glass" size="sm" className="hidden md:flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button>
            
            <Button variant="glass" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 bg-gradient-purple-blaze text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="glass"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 glass rounded-lg p-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-10 glass border-white/20"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-foreground hover:text-neon-cyan transition-colors py-2">
                Mobiles
              </a>
              <a href="#" className="text-foreground hover:text-neon-cyan transition-colors py-2">
                Electronics
              </a>
              <a href="#" className="text-foreground hover:text-neon-cyan transition-colors py-2">
                Clothing
              </a>
            </div>
            
            <Button variant="glass" className="w-full">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;