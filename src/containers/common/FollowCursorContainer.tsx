"use client";

import ListCursorContainer from "@/containers/works/ListCursorContainer";
import GridCursorContainer from "../works/GridCursorContainer";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isGridState, itemHoverState } from "@/utils/lib/recoil/atom";

export default function FollowCursorContainer() {
  const pathname = usePathname();
  const [isGrid, setIsGrid] = useRecoilState(isGridState);
  const setIsHover = useSetRecoilState(itemHoverState);
  useLayoutEffect(() => {
    if (pathname === "/") setIsGrid(false);
    else if (pathname === "/works") setIsGrid(true);
    else setIsGrid(null);
    setIsHover(false);
  }, [pathname]);
  return (
    <>
      {isGrid === null ? (
        <></>
      ) : isGrid ? (
        <GridCursorContainer />
      ) : (
        <ListCursorContainer />
      )}
    </>
  );
}
