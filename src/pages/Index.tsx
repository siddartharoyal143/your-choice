import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import AuthModal from '@/components/AuthModal';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <CategoryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <ProductGrid category={activeCategory} />
      <Footer />
      <Cart />
      <AuthModal />
    </div>
  );
};

export default Index;
