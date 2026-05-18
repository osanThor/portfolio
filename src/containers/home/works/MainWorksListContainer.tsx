"use client";

import ListWorkItem from "@/components/works/ListWorkItem";
import { useSyncWorksImageList } from "@/hooks/useSyncWorksImageList";
import { Work } from "@/services/works.service";
import { useWorksStore } from "@/stores/works";

type Props = {
  works: Work[];
};

export default function MainWorksListContainer({ works }: Props) {
  const setIsHover = useWorksStore((state) => state.setIsHover);
  const setHoveredItemId = useWorksStore((state) => state.setHoveredItemId);

  useSyncWorksImageList(works);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-10 lg:gap-0">
      {works.slice(0, 4).map((work, idx) => (
        <ListWorkItem
          key={work.path}
          isMain
          work={work}
          setIsHover={setIsHover}
          onChangeHoveredItemId={() => setHoveredItemId(idx)}
        />
      ))}
    </ul>
  );
}
