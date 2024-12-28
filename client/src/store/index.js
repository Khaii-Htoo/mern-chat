import { create } from 'zustand'

export const useStore = create((set) => ({
  authUser: null,
  setAuthUser: (user) => set(() => ({ authUser: user })),
  clearAuthUser: () => set(() => ({ authUser: null })),
}))
