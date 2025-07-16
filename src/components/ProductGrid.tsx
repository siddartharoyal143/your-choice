import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
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

const ProductGrid = () => {
  // Mock product data - in real app this would come from Firebase/API
  const products = [
    {
      id: '1',
      title: 'iPhone 15 Pro Max - 256GB',
      price: 134900,
      originalPrice: 159900,
      image: iphoneImg,
      rating: 4.8,
      offer: 'MEGA DEAL',
      category: 'Mobiles'
    },
    {
      id: '2',
      title: 'Samsung Galaxy S24 Ultra',
      price: 124999,
      originalPrice: 149999,
      image: samsungImg,
      rating: 4.7,
      offer: 'LIMITED TIME',
      category: 'Mobiles'
    },
    {
      id: '3',
      title: 'MacBook Pro 14" M3 Chip',
      price: 169900,
      originalPrice: 199900,
      image: macbookImg,
      rating: 4.9,
      offer: 'BESTSELLER',
      category: 'Electronics'
    },
    {
      id: '4',
      title: 'Sony WH-1000XM5 Headphones',
      price: 29990,
      originalPrice: 34990,
      image: sonyImg,
      rating: 4.6,
      category: 'Electronics'
    },
    {
      id: '5',
      title: 'Nike Air Max 270 Sneakers',
      price: 12995,
      originalPrice: 15995,
      image: nikeImg,
      rating: 4.5,
      offer: 'FLASH SALE',
      category: 'Clothing'
    },
    {
      id: '6',
      title: 'Adidas Ultraboost 22',
      price: 16999,
      originalPrice: 19999,
      image: adidasImg,
      rating: 4.4,
      category: 'Clothing'
    },
    {
      id: '7',
      title: 'Dell XPS 13 Laptop',
      price: 94990,
      originalPrice: 109990,
      image: dellImg,
      rating: 4.7,
      offer: 'HOT DEAL',
      category: 'Electronics'
    },
    {
      id: '8',
      title: 'iPad Pro 12.9" M2 Chip',
      price: 112900,
      originalPrice: 127900,
      image: ipadImg,
      rating: 4.8,
      category: 'Electronics'
    },
    {
      id: '9',
      title: 'Levi\'s 501 Original Jeans',
      price: 3999,
      originalPrice: 4999,
      image: levisImg,
      rating: 4.3,
      category: 'Clothing'
    },
    {
      id: '10',
      title: 'OnePlus 12 Pro',
      price: 64999,
      originalPrice: 74999,
      image: oneplusImg,
      rating: 4.6,
      offer: 'NEW LAUNCH',
      category: 'Mobiles'
    },
    {
      id: '11',
      title: 'Apple Watch Series 9',
      price: 41900,
      originalPrice: 46900,
      image: appleWatchImg,
      rating: 4.7,
      category: 'Electronics'
    },
    {
      id: '12',
      title: 'Tommy Hilfiger Shirt',
      price: 2999,
      originalPrice: 3999,
      image: tommyImg,
      rating: 4.2,
      category: 'Clothing'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-neon-glow bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products with cutting-edge technology
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="plasma"
            className="px-8 py-4 text-lg"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;