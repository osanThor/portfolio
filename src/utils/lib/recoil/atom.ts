import { atom } from "recoil";

export const mountedState = atom<boolean>({
  key: "mountedState",
  default: false,
});

export const scrollOffsetYState = atom<any>({
  key: "scrollOffsetYState",
  default: null,
});
export const itemHoverState = atom<boolean>({
  key: "itemHoverState",
  default: false,
});
export const itemHoverIdState = atom<number>({
  key: "itemHoverIdState",
  default: 0,
});
export const worksImageListState = atom<string[]>({
  key: "worksImageListState",
  default: [],
});
export const isGridState = atom<boolean | null>({
  key: "isGridState",
  default: false,
});

export const gsapTriggerState = atom<boolean>({
  key: "gsapTriggerState",
  default: false,
});
