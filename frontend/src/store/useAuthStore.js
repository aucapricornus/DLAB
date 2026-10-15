import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuth: false,
      rememberMe: false,
      setAuth: ({ user, token }, rememberMe) => {
        set({ user, token, isAuth: !!token, rememberMe });
      },
      logout: () => {
        set((state) => ({
          user: null,
          token: null,
          isAuth: false,
          rememberMe: state.rememberMe,
        }));
      },
      // setRememberMe: (value) => set({rememberMe: value}), // no se necesita
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
