import { create } from 'zustand'

const useStore = create((set) => ({
  username: '',
  setUsername: (name) => set({ username: name }),
}))

export default useStore