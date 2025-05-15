import { create } from "zustand";

interface InGSAPStore {
  gsapTrigger: boolean;
  setGsapTrigger: () => void;
}

export const useGsapStore = create<InGSAPStore>((set) => ({
  gsapTrigger: false,
  setGsapTrigger: () => set((state) => ({ gsapTrigger: !state.gsapTrigger })),
}));
