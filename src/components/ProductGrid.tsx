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
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {category === 'All' ? 'All Products' : category}
          </h2>
          <p className="text-muted-foreground">
            {category === 'All' 
              ? 'Browse our complete collection' 
              : `Shop from our ${category.toLowerCase()} collection`}
          </p>
          <div className="mt-2 text-sm text-muted-foreground">
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
          <div className="text-center mt-10">
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold"
              onClick={loadMore}
            >
              Load More ({products.length - displayCount} more)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;