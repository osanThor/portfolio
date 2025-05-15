"use client";

import ListWorkItem from "@/components/works/ListWorkItem";
import { Work } from "@/services/works.service";
import { useWorksStore } from "@/stores/works";
import { useLayoutEffect } from "react";

type Props = {
  works: Work[];
};

export default function MainWorksListContainer({ works }: Props) {
  const setIsHovered = useWorksStore((state) => state.setIsHover);
  const setHoveredItemId = useWorksStore((state) => state.setHoveredItemId);
  const setWorksImageList = useWorksStore((state) => state.setWorksImageList);

  function handleChangeHoverIdx(idx: number) {
    setHoveredItemId(idx);
  }

  useLayoutEffect(() => {
    setWorksImageList(works.map((work) => work.path));
  }, []);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-10 lg:gap-0">
        {works.slice(0, 4).map((work, idx) => (
          <ListWorkItem
            key={work.path}
            isMain={true}
            work={work}
            setIsHover={setIsHovered}
            onChangeHoveredItemId={() => handleChangeHoverIdx(idx)}
          />
        ))}
      </ul>
    </>
  );
}
