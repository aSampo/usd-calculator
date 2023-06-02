import { create } from "zustand";

type Store = {
  count: number;
  bluePrice: string;
  inc: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 1,
  bluePrice: "$ 530",
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;
