import { Button } from '@/components/ui/button';
import { Smartphone, Monitor, Shirt, Star } from 'lucide-react';
import { useState } from 'react';

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Star, color: 'neon-cyan' },
    { name: 'Mobiles', icon: Smartphone, color: 'neon-magenta' },
    { name: 'Electronics', icon: Monitor, color: 'neon-green' },
    { name: 'Clothing', icon: Shirt, color: 'neon-cyan' },
  ];

  return (
    <section className="py-8 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.name;
            
            return (
              <Button
                key={category.name}
                variant={isActive ? 'neon' : 'glass'}
                size="lg"
                className={`flex items-center gap-2 px-6 py-3 ${
                  isActive ? 'text-black' : 'text-foreground'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-semibold">{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;