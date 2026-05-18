"use client";

import GridCursorContainer from "@/containers/works/GridCursorContainer";
import ListCursorContainer from "@/containers/works/ListCursorContainer";
import { useWorksStore } from "@/stores/works";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function FollowCursorContainer() {
  const pathname = usePathname();
  const isGrid = useWorksStore((state) => state.isGrid);
  const setIsGrid = useWorksStore((state) => state.setIsGrid);
  const setIsHover = useWorksStore((state) => state.setIsHover);

  useLayoutEffect(() => {
    if (pathname === "/") setIsGrid(false);
    else if (pathname === "/works") setIsGrid(true);
    else setIsGrid(null);
    setIsHover(false);
  }, [pathname, setIsGrid, setIsHover]);

  if (isGrid === null) return null;

  return isGrid ? <GridCursorContainer /> : <ListCursorContainer />;
}
