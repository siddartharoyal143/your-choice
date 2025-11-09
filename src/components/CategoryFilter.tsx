import { Button } from '@/components/ui/button';
import { Smartphone, Monitor, Shirt, Star } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories = [
    { name: 'All', icon: Star },
    { name: 'Mobiles', icon: Smartphone },
    { name: 'Electronics', icon: Monitor },
    { name: 'Clothing', icon: Shirt },
  ];

  return (
    <section className="py-6 border-b bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.name;
            
            return (
              <Button
                key={category.name}
                variant={isActive ? 'default' : 'outline'}
                size="lg"
                className="flex items-center gap-2 font-semibold"
                onClick={() => onCategoryChange(category.name)}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;