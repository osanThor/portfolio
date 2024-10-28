"use client";
import { scrollOffsetYState } from "@/utils/lib/recoil/atom";
import { useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";
import Scrollbar from "smooth-scrollbar";

type Props = {
  children: React.ReactNode;
};
export default function ScrollSmootherContainer({ children }: Props) {
  const setScrollOffsetY = useSetRecoilState(scrollOffsetYState);
  useLayoutEffect(() => {
    const target = document.querySelector("#wrap") as HTMLElement;
    const scrollbar = Scrollbar.init(target, {
      damping: 0.07,
    });
    scrollbar.addListener(({ offset }) => {
      setScrollOffsetY(offset.y);
    });
  }, []);

  return (
    <>
      <div
        id="wrap"
        className="max-w-screen overflow-x-hidden flex min-h-screen w-full flex-col items-center "
      >
        {children}
      </div>
    </>
  );
}
