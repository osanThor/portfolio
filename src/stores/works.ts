import { Work } from "@/services/works.service";
import { create } from "zustand";

interface InWorksStore {
  isGrid: boolean | null;
  isHover: boolean;
  hoveredItemId: number;
  worksImageList: string[];
  actions: {
    setIsGrid: (bol: boolean | null) => void;
    setIsHover: (bol: boolean) => void;
    setHoveredItemId: (num: number) => void;
    setWorksImageList: (works: string[]) => void;
  };
}

export const useWorksStore = create<InWorksStore>((set) => ({
  isGrid: false,
  isHover: false,
  hoveredItemId: 0,
  worksImageList: [],
  actions: {
    setIsGrid: (bol) => set(() => ({ isGrid: bol })),
    setIsHover: (bol) => set(() => ({ isHover: bol })),
    setHoveredItemId: (num) => set(() => ({ hoveredItemId: num })),
    setWorksImageList: (works) => set(() => ({ worksImageList: works })),
  },
}));
