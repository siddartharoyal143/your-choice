import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Star } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-blue-ocean rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-purple-blaze rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-neon-green rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-pulse-glow">
            <Zap className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium">New Collection Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 leading-tight">
            <span className="bg-gradient-neon-glow bg-clip-text text-transparent animate-gradient">
              BIG SALE
            </span>
            <br />
            <span className="text-foreground">
              UP TO 70% OFF
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the future of shopping with our cutting-edge collection of 
            <span className="text-neon-cyan"> premium electronics</span>, 
            <span className="text-neon-magenta"> fashion</span>, and 
            <span className="text-neon-green"> lifestyle products</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="cyber"
              className="px-8 py-6 text-lg"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="glass"
              className="px-8 py-6 text-lg"
            >
              <Star className="mr-2 w-5 h-5" />
              View Deals
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-magenta mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-green mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;