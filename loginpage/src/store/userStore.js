import {create} from 'zustand'

const useStore = create((set) => ({
    username: '',
    theme: 'light',

    setUsername: (name) => set({username: name}),
    logout: () => set({username: ''}),

    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
        })),
}))

export default useStore