import { create } from "zustand";

interface InScrollStore {
  scrollOffsetY: number;
  setScrollOffsetY: (y: number) => void;
}

export const useScrollStore = create<InScrollStore>((set) => ({
  scrollOffsetY: 0,
  setScrollOffsetY: (y) => set(() => ({ scrollOffsetY: y })),
}));
