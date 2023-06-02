import { create } from "zustand";
import { getDollarPrices } from './api';

type Store = {
  dollarPrices: [];
  fetchDollarPrices: () => void;
};

const useStore = create<Store>()((set) => ({
  dollarPrices: [],
  fetchDollarPrices: async () => {
    const dollarPrices = await getDollarPrices();
    set({ dollarPrices });
  },
}));

export default useStore;
