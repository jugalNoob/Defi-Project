import create from 'zustand';

const useStore = create((set) => ({
  counter: 0, // Initial state value is 0
  increasecounter: () => set((state) => ({ counter: state.counter + 2 })),
  dncreasecounter: () => set((state) => ({ counter: state.counter - 2 })),
  restes: () => set({ counter: 0 }), // Corrected reset function
  background: 'blue',
  fontsize: '2rem',
  setColor: (newColor) => set({ color: newColor }),
  
  
  // Add a function to set the color
}));

export default useStore;
