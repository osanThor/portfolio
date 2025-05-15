"use client";
import GridIcon from "@/components/ui/icons/GridIcon";
import ListIcon from "@/components/ui/icons/ListIcon";
import GridWorkItem from "@/components/works/GridWorkItem";
import ListWorkItem from "@/components/works/ListWorkItem";
import { Work } from "@/services/works.service";
import { useEffect, useLayoutEffect, useState } from "react";
import { useGsapStore } from "@/stores/gsap";
import { useWorksStore } from "@/stores/works";

type Props = {
  works: Work[];
};

export default function WorksListContainer({ works }: Props) {
  const [workList, setWorkList] = useState<Work[]>(works);

  const setGsapTrigger = useGsapStore((state) => state.setGsapTrigger);

  const isGrid = useWorksStore((state) => state.isGrid);
  const { setIsGrid, setIsHover, setHoveredItemId, setWorksImageList } =
    useWorksStore((state) => state.actions);

  useEffect(() => {
    setGsapTrigger();
  }, [works]);

  useEffect(() => {
    setGsapTrigger();
  }, [isGrid]);

  useLayoutEffect(() => {
    setWorksImageList(works.map((work) => work.path));
  }, [works]);

  return (
    <>
      <div className="w-full max-w-[1400px] px-4 min-[1600px]:px-0 py-5 md:py-10 md:mb-5">
        <div className="w-full flex items-center gap-5 justify-between lg:py-10">
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={() => setIsGrid(true)}
              className={`w-20 h-20 text-2xl flex items-center justify-center rounded-full border transition-all ${
                isGrid
                  ? "bg-black border-black text-white hover:opacity-70"
                  : "border-lightGray"
              }`}
            >
              <GridIcon />
            </button>
            <button
              onClick={() => setIsGrid(false)}
              className={`w-20 h-20 text-2xl flex items-center justify-center rounded-full border transition-all ${
                !isGrid
                  ? "bg-black border-black text-white hover:opacity-70"
                  : "border-lightGray"
              }`}
            >
              <ListIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1600px] relative px-4 min-[1600px]:px-0 py-5 md:py-10 mb-5">
        {!isGrid && (
          <div className="w-full hidden lg:flex border-b border-lightGray pb-9 text-lightGray gap-10">
            <div className="flex-1">Project title</div>
            <div>Category</div>
            <div className="w-[55px] flex items-center justify-end">Year</div>
          </div>
        )}
        <ul
          className={`-z-10 overlay w-full grid ${
            isGrid
              ? "grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20"
              : "gap-5 md:gap-10 lg:gap-0 lg:grid-cols-1"
          }`}
        >
          {workList.map((work, idx) =>
            isGrid ? (
              <GridWorkItem
                key={`grid-${work.path}`}
                work={work}
                setIsHover={setIsHover}
              />
            ) : (
              <ListWorkItem
                key={`list-${work.path}`}
                isMain={false}
                work={work}
                setIsHover={setIsHover}
                onChangeHoveredItemId={() => setHoveredItemId(idx)}
              />
            )
          )}
        </ul>
      </div>
    </>
  );
}
