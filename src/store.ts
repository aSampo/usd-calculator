import { create } from "zustand";
import { getDollarPrices } from './api';

type Store = {
  input: number;
  dollarPrices: [];
  fetchDollarPrices: () => void;
  setInput: (input: number) => void;
};

const useStore = create<Store>()((set) => ({
  input: 0,
  dollarPrices: [],
  fetchDollarPrices: async () => {
    const dollarPrices = await getDollarPrices();
    set({
      dollarPrices: dollarPrices.map((item: any) => ({
        ...item,
        venta: parseFloat(item.venta),
      }))
    });
  },
  setInput: (input) => {
    set({ input })
  }
}));

export default useStore;
