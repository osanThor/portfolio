"use client";

import ListWorkItem from "@/components/works/ListWorkItem";
import { Work } from "@/services/works.service";
import {
  itemHoverIdState,
  itemHoverState,
  worksImageListState,
} from "@/utils/lib/recoil/atom";
import { useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";

type Props = {
  works: Work[];
};

export default function MainWorksListContainer({ works }: Props) {
  const setIsHovered = useSetRecoilState(itemHoverState);
  const setHoverIdx = useSetRecoilState(itemHoverIdState);
  const setWorksImages = useSetRecoilState(worksImageListState);
  function handleChangeHoverIdx(idx: number) {
    setHoverIdx(idx);
  }
  useLayoutEffect(() => {
    setWorksImages(works.map((work) => work.path));
  }, []);
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-10 lg:gap-0">
        {works.slice(0, 4).map((work, idx) => (
          <ListWorkItem
            key={work.path}
            isMain={true}
            work={work}
            setIsHovered={setIsHovered}
            onChangeIdx={() => handleChangeHoverIdx(idx)}
          />
        ))}
      </ul>
    </>
  );
}
