import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  username: string;
  role: 'staff' | 'owner' | 'admin';
}

interface AuthState {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setAuth: (user, token) => {
        // Save token to cookies so Next.js middleware can read it
        if (typeof window !== 'undefined') {
          document.cookie = `token=${token}; path=/; max-age=86400; SameSite=Strict`;
        }
        set({ user, token });
      },
      logout: () => {
        if (typeof window !== 'undefined') {
          document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        set({ user: null, token: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
