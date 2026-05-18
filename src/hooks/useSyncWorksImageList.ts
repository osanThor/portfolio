"use client";

import { Work } from "@/services/works.service";
import { useWorksStore } from "@/stores/works";
import { getWorkImagePaths } from "@/utils/work";
import { useLayoutEffect } from "react";

export function useSyncWorksImageList(works: Work[]) {
  const setWorksImageList = useWorksStore((state) => state.setWorksImageList);

  useLayoutEffect(() => {
    setWorksImageList(getWorkImagePaths(works));
  }, [works, setWorksImageList]);
}
