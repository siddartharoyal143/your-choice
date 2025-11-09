import { Search, ShoppingCart, User, Menu, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCart();
  const { user, toggleLogin, logout } = useAuth();

  return (
    <nav className="bg-primary sticky top-0 z-50 w-full shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary-foreground italic">
              YOURS CHOICE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">
              Mobiles
            </a>
            <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">
              Electronics
            </a>
            <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">
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
                className="pl-10 bg-white border-none shadow-sm focus-visible:ring-1 focus-visible:ring-white"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <span className="text-sm font-medium text-primary-foreground">{user.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary/80"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="secondary" 
                size="sm" 
                className="hidden md:flex items-center space-x-2"
                onClick={toggleLogin}
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>
            )}
            
            <Button 
              variant="secondary" 
              size="sm" 
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingCart className="w-4 h-4" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getTotalItems()}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="secondary"
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
          <div className="md:hidden mt-4 space-y-4 bg-white rounded-lg p-4 shadow-lg animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-10 bg-background"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 font-medium">
                Mobiles
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 font-medium">
                Electronics
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 font-medium">
                Clothing
              </a>
            </div>
            
            {user ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full border-2 border-primary"
                  />
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-destructive hover:text-destructive/80"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="default" 
                className="w-full"
                onClick={toggleLogin}
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;