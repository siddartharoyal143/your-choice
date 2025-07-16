import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthStore {
  user: User | null;
  isLoginOpen: boolean;
  isSignupOpen: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  toggleLogin: () => void;
  toggleSignup: () => void;
  closeModals: () => void;
}

export const useAuth = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isLoginOpen: false,
      isSignupOpen: false,
      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock user data
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0],
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        };
        
        set({ user: mockUser, isLoginOpen: false });
      },
      signup: async (name: string, email: string, password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock user data
        const mockUser: User = {
          id: '1',
          email,
          name,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        };
        
        set({ user: mockUser, isSignupOpen: false });
      },
      logout: () => set({ user: null }),
      toggleLogin: () => {
        set((state) => ({ 
          isLoginOpen: !state.isLoginOpen, 
          isSignupOpen: false 
        }));
      },
      toggleSignup: () => {
        set((state) => ({ 
          isSignupOpen: !state.isSignupOpen, 
          isLoginOpen: false 
        }));
      },
      closeModals: () => set({ isLoginOpen: false, isSignupOpen: false })
    }),
    {
      name: 'auth-storage',
    }
  )
);