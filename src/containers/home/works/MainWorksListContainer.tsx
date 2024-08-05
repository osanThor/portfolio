"use client";

import ListWorkItem from "@/components/works/ListWorkItem";
import ListCursorContainer from "@/containers/works/ListCursorContainer";
import { Work } from "@/services/works.service";
import { useState } from "react";

type Props = {
  works: Work[];
};

export default function MainWorksListContainer({ works }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <ListCursorContainer hover={isHovered} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-10 lg:gap-0">
        {works.slice(0, 4).map((work) => (
          <ListWorkItem
            key={work.path}
            isMain={true}
            work={work}
            setIsHovered={setIsHovered}
          />
        ))}
      </ul>
    </>
  );
}
