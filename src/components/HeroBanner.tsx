import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/90 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Special Offers</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              BIG SALE
              <br />
              <span className="text-secondary">UP TO 70% OFF</span>
            </h1>

            <p className="text-lg text-white/90 max-w-md">
              Discover amazing deals on premium electronics, fashion, and lifestyle products
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="font-semibold"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 border-white font-semibold"
              >
                View Deals
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-white/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm text-white/80">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Could add image here */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full h-64 bg-white/10 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
