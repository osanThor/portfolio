"use client";

import ListCursorContainer from "@/containers/works/ListCursorContainer";
import GridCursorContainer from "../works/GridCursorContainer";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { useRecoilState } from "recoil";
import { isGridState } from "@/utils/lib/recoil/atom";

export default function FollowCursorContainer() {
  const pathname = usePathname();
  const [isGrid, setIsGrid] = useRecoilState(isGridState);
  useLayoutEffect(() => {
    if (pathname === "/") setIsGrid(false);
    else if (pathname === "/works") setIsGrid(true);
  }, [pathname]);
  return <>{isGrid ? <GridCursorContainer /> : <ListCursorContainer />}</>;
}
