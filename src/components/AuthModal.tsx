import { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';

const AuthModal = () => {
  const { 
    isLoginOpen, 
    isSignupOpen, 
    login, 
    signup, 
    toggleLogin, 
    toggleSignup, 
    closeModals 
  } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isLoginOpen) {
        await login(formData.email, formData.password);
      } else {
        await signup(formData.name, formData.email, formData.password);
      }
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const switchMode = () => {
    if (isLoginOpen) {
      toggleSignup();
    } else {
      toggleLogin();
    }
  };

  if (!isLoginOpen && !isSignupOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={closeModals}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className={`w-full max-w-md transform transition-all duration-500 ${
          isLoginOpen || isSignupOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="glass rounded-2xl border border-white/20 overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-blue-ocean p-6 text-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={closeModals}
                className="absolute top-4 right-4 text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="w-16 h-16 bg-gradient-neon-glow rounded-full mx-auto mb-4 animate-pulse-glow"></div>
              <h2 className="text-2xl font-orbitron font-bold text-white">
                {isLoginOpen ? 'Welcome Back' : 'Join the Future'}
              </h2>
              <p className="text-white/80 mt-2">
                {isLoginOpen ? 'Sign in to your account' : 'Create your account'}
              </p>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignupOpen && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10 glass border-white/20 focus:border-neon-cyan"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 glass border-white/20 focus:border-neon-cyan"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 glass border-white/20 focus:border-neon-cyan"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {isSignupOpen && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="pl-10 glass border-white/20 focus:border-neon-cyan"
                        required
                      />
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  variant="cyber" 
                  className="w-full" 
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      {isLoginOpen ? 'Signing In...' : 'Creating Account...'}
                    </div>
                  ) : (
                    isLoginOpen ? 'Sign In' : 'Create Account'
                  )}
                </Button>
              </form>

              {/* Switch Mode */}
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  {isLoginOpen ? "Don't have an account?" : "Already have an account?"}
                </p>
                <Button 
                  variant="ghost" 
                  onClick={switchMode}
                  className="text-neon-cyan hover:text-neon-magenta transition-colors mt-2"
                >
                  {isLoginOpen ? 'Create Account' : 'Sign In'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;