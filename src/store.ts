import { create } from "zustand";
import { getDollarPrices } from './api';

type Store = {
  input: string;
  dollarPrices: [];
  fetchDollarPrices: () => void;
  setInput: (input: string) => void;
};

const useStore = create<Store>()((set) => ({
  input: '0',
  dollarPrices: [],
  fetchDollarPrices: async () => {
    const dollarPrices = await getDollarPrices();
    set({ dollarPrices });
  },
  setInput: (input) => {
    set({ input })
  }
}));

export default useStore;
