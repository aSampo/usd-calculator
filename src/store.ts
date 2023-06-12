import { create } from "zustand";
import { getDollarPrices } from './api';

type Store = {
  input: number;
  dollarPrices: [];
  fetchDollarPrices: () => void;
  setInput: (input: number) => void;
  isApiLoading: boolean;
  selectedCurrency: string;
  setSelectedCurrency: (selectedCurrency: string) => void;
};

const useStore = create<Store>()((set) => ({
  input: 0,
  dollarPrices: [],
  isApiLoading: false,
  selectedCurrency: 'usd',
  setSelectedCurrency: (selectedCurrency) => {
    set({ selectedCurrency })
  },
  fetchDollarPrices: async () => {
    set({ isApiLoading: true })
    const dollarPrices = await getDollarPrices();
    set({
      dollarPrices: dollarPrices.map((item: any) => ({
        ...item,
        venta: parseFloat(item.venta),
      }))
    });
    set({ isApiLoading: false })
  },
  setInput: (input) => {
    set({ input })
  }
}));

export default useStore;
