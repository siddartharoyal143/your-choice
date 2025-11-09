import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  offer?: string;
  category: string;
}

const ProductCard = ({ 
  id, 
  title, 
  price, 
  originalPrice, 
  image, 
  rating, 
  offer, 
  category 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  const { user, toggleLogin } = useAuth();

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    if (!user) {
      toggleLogin();
      return;
    }
    
    addItem({
      id,
      title,
      price,
      image,
      category
    });
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-200 hover:shadow-lg overflow-hidden bg-card border"
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 space-y-1">
          {offer && (
            <Badge variant="secondary" className="font-semibold shadow-sm">
              {offer}
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="success" className="font-semibold shadow-sm">
              {discount}% OFF
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          size="sm"
          variant="ghost"
          className={`absolute top-2 right-2 bg-white hover:bg-white shadow-sm ${
            isWishlisted ? 'text-destructive' : 'text-muted-foreground'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-3 space-y-2">
        {/* Category */}
        <div className="text-xs text-muted-foreground uppercase font-medium">
          {category}
        </div>

        {/* Title */}
        <h3 className="font-medium text-foreground line-clamp-2 text-sm group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5 bg-success text-white px-1.5 py-0.5 rounded text-xs font-semibold">
            {rating}
            <Star className="w-3 h-3 fill-current ml-0.5" />
          </div>
          <span className="text-xs text-muted-foreground">(234)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xl font-bold text-foreground">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
              <span className="text-sm text-success font-semibold">
                {discount}% off
              </span>
            </>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          variant="default"
          size="sm"
          className="w-full font-semibold"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
