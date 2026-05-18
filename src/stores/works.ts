import { Work } from "@/services/works.service";
import { create } from "zustand";

interface WorksStore {
  isGrid: boolean | null;
  isHover: boolean;
  hoveredItemId: number;
  worksImageList: string[];
  setIsGrid: (value: boolean | null) => void;
  setIsHover: (value: boolean) => void;
  setHoveredItemId: (value: number) => void;
  setWorksImageList: (paths: string[]) => void;
}

export const useWorksStore = create<WorksStore>((set) => ({
  isGrid: false,
  isHover: false,
  hoveredItemId: 0,
  worksImageList: [],
  setIsGrid: (value) => set({ isGrid: value }),
  setIsHover: (value) => set({ isHover: value }),
  setHoveredItemId: (value) => set({ hoveredItemId: value }),
  setWorksImageList: (paths) => set({ worksImageList: paths }),
}));
