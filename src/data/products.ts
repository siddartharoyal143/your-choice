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

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  offer?: string;
  category: string;
}

// Helper function to generate random prices
const generatePrice = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Helper function to generate random ratings
const generateRating = () => Math.round((Math.random() * 2 + 3) * 10) / 10; // 3.0 to 5.0

// Mobiles Data (50 items)
export const mobilesData: Product[] = [
  {
    id: 'mobile-1',
    title: 'iPhone 15 Pro Max - 256GB',
    price: 134900,
    originalPrice: 159900,
    image: iphoneImg,
    rating: 4.8,
    offer: 'MEGA DEAL',
    category: 'Mobiles'
  },
  {
    id: 'mobile-2',
    title: 'Samsung Galaxy S24 Ultra',
    price: 124999,
    originalPrice: 149999,
    image: samsungImg,
    rating: 4.7,
    offer: 'LIMITED TIME',
    category: 'Mobiles'
  },
  {
    id: 'mobile-3',
    title: 'OnePlus 12 Pro',
    price: 64999,
    originalPrice: 74999,
    image: oneplusImg,
    rating: 4.6,
    offer: 'NEW LAUNCH',
    category: 'Mobiles'
  },
  // Generate 47 more mobile products
  ...Array.from({ length: 47 }, (_, i) => ({
    id: `mobile-${i + 4}`,
    title: `${['iPhone', 'Samsung', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo', 'Realme', 'Google Pixel'][i % 8]} ${['Pro', 'Ultra', 'Max', 'Plus', 'Premium'][i % 5]} ${i + 4}`,
    price: generatePrice(15000, 150000),
    originalPrice: generatePrice(20000, 180000),
    image: [iphoneImg, samsungImg, oneplusImg][i % 3],
    rating: generateRating(),
    offer: ['FLASH SALE', 'HOT DEAL', 'BESTSELLER', 'NEW LAUNCH'][i % 4],
    category: 'Mobiles'
  }))
];

// Electronics Data (50 items)
export const electronicsData: Product[] = [
  {
    id: 'electronics-1',
    title: 'MacBook Pro 14" M3 Chip',
    price: 169900,
    originalPrice: 199900,
    image: macbookImg,
    rating: 4.9,
    offer: 'BESTSELLER',
    category: 'Electronics'
  },
  {
    id: 'electronics-2',
    title: 'Sony WH-1000XM5 Headphones',
    price: 29990,
    originalPrice: 34990,
    image: sonyImg,
    rating: 4.6,
    category: 'Electronics'
  },
  {
    id: 'electronics-3',
    title: 'Dell XPS 13 Laptop',
    price: 94990,
    originalPrice: 109990,
    image: dellImg,
    rating: 4.7,
    offer: 'HOT DEAL',
    category: 'Electronics'
  },
  {
    id: 'electronics-4',
    title: 'iPad Pro 12.9" M2 Chip',
    price: 112900,
    originalPrice: 127900,
    image: ipadImg,
    rating: 4.8,
    category: 'Electronics'
  },
  {
    id: 'electronics-5',
    title: 'Apple Watch Series 9',
    price: 41900,
    originalPrice: 46900,
    image: appleWatchImg,
    rating: 4.7,
    category: 'Electronics'
  },
  // Generate 45 more electronics products
  ...Array.from({ length: 45 }, (_, i) => ({
    id: `electronics-${i + 6}`,
    title: `${['MacBook', 'Dell XPS', 'HP Pavilion', 'Lenovo ThinkPad', 'Asus ROG', 'Sony', 'Bose', 'JBL', 'Canon', 'Nikon'][i % 10]} ${['Pro', 'Ultra', 'Premium', 'Studio', 'Gaming'][i % 5]} ${i + 6}`,
    price: generatePrice(25000, 200000),
    originalPrice: generatePrice(30000, 250000),
    image: [macbookImg, sonyImg, dellImg, ipadImg, appleWatchImg][i % 5],
    rating: generateRating(),
    offer: ['FLASH SALE', 'HOT DEAL', 'BESTSELLER', 'LIMITED TIME'][i % 4],
    category: 'Electronics'
  }))
];

// Clothing Data (50 items)
export const clothingData: Product[] = [
  {
    id: 'clothing-1',
    title: 'Nike Air Max 270 Sneakers',
    price: 12995,
    originalPrice: 15995,
    image: nikeImg,
    rating: 4.5,
    offer: 'FLASH SALE',
    category: 'Clothing'
  },
  {
    id: 'clothing-2',
    title: 'Adidas Ultraboost 22',
    price: 16999,
    originalPrice: 19999,
    image: adidasImg,
    rating: 4.4,
    category: 'Clothing'
  },
  {
    id: 'clothing-3',
    title: 'Levi\'s 501 Original Jeans',
    price: 3999,
    originalPrice: 4999,
    image: levisImg,
    rating: 4.3,
    category: 'Clothing'
  },
  {
    id: 'clothing-4',
    title: 'Tommy Hilfiger Shirt',
    price: 2999,
    originalPrice: 3999,
    image: tommyImg,
    rating: 4.2,
    category: 'Clothing'
  },
  // Generate 46 more clothing products
  ...Array.from({ length: 46 }, (_, i) => ({
    id: `clothing-${i + 5}`,
    title: `${['Nike', 'Adidas', 'Puma', 'Levi\'s', 'Tommy Hilfiger', 'Calvin Klein', 'Ralph Lauren', 'H&M', 'Zara', 'Uniqlo'][i % 10]} ${['Pro', 'Classic', 'Premium', 'Comfort', 'Sport'][i % 5]} ${i + 5}`,
    price: generatePrice(1500, 25000),
    originalPrice: generatePrice(2000, 30000),
    image: [nikeImg, adidasImg, levisImg, tommyImg][i % 4],
    rating: generateRating(),
    offer: ['FLASH SALE', 'HOT DEAL', 'BESTSELLER', 'TRENDY'][i % 4],
    category: 'Clothing'
  }))
];

// Combined products data
export const allProducts: Product[] = [
  ...mobilesData,
  ...electronicsData,
  ...clothingData
];

// Function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return allProducts;
  return allProducts.filter(product => product.category === category);
};