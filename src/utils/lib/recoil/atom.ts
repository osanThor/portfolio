import { atom } from "recoil";

export const mountedState = atom<boolean>({
  key: "mountedState",
  default: false,
});

export const scrollOffsetYState = atom<any>({
  key: "scrollOffsetYState",
  default: null,
});
