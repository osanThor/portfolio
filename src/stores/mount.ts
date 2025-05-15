import { create } from "zustand";

export const useMountStore = create<{
  mounted: boolean;
  setMounted: (bol: boolean) => void;
}>((set) => ({
  mounted: false,
  setMounted: (bol) => set(() => ({ mounted: bol })),
}));
