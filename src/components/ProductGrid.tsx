import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { allProducts, getProductsByCategory } from '@/data/products';
import iphoneImg from '@/assets/iphone-15-pro.jpg';
import samsungImg from '@/assets/samsung-galaxy-s24.jpg';
import macbookImg from '@/assets/macbook-pro.jpg';
import sonyImg from '@/assets/sony-headphones.jpg';
import nikeImg from '@/assets/nike-airmax.jpg';
import adidasImg from '@/assets/adidas-ultraboost.jpg';
import dellImg from '@/assets/dell-xps.jpg';
import ipadImg from '@/assets/ipad-pro.jpg';
import levisImg from '@/assets/levis-jeans.jpg';
import oneplusImg from '@/assets/oneplus-12.jpg';
import appleWatchImg from '@/assets/apple-watch.jpg';
import tommyImg from '@/assets/tommy-shirt.jpg';

interface ProductGridProps {
  category?: string;
}

const ProductGrid = ({ category = 'All' }: ProductGridProps) => {
  const [displayCount, setDisplayCount] = useState(12);
  const products = getProductsByCategory(category);
  const displayedProducts = products.slice(0, displayCount);
  
  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 12, products.length));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-neon-glow bg-clip-text text-transparent">
              {category === 'All' ? 'All Products' : category}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {category === 'All' 
              ? 'Discover our complete collection of premium products' 
              : `Explore our ${category.toLowerCase()} collection with cutting-edge technology`}
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {displayedProducts.length} of {products.length} products
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        {displayCount < products.length && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="plasma"
              className="px-8 py-4 text-lg"
              onClick={loadMore}
            >
              Load More Products ({products.length - displayCount} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;