import { atom } from "recoil";

export const mountedState = atom<boolean>({
  key: "mountedState",
  default: false,
});
