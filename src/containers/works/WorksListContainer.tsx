"use client";
import GridIcon from "@/components/ui/icons/GridIcon";
import ListIcon from "@/components/ui/icons/ListIcon";
import GridWorkItem from "@/components/works/GridWorkItem";
import ListWorkItem from "@/components/works/ListWorkItem";
import { Work } from "@/services/works.service";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  itemHoverState,
  itemHoverIdState,
  worksImageListState,
  isGridState,
  gsapTriggerState,
} from "@/utils/lib/recoil/atom";
import WorkTypeButton from "@/components/works/WorkTypeButton";

type Props = {
  works: Work[];
};

type ButtonType = "ALL" | "BS" | "PS";

export default function WorksListContainer({ works }: Props) {
  const [workList, setWorkList] = useState<Work[]>(works);
  const [type, setType] = useState<ButtonType>("ALL");
  const [isGrid, setIsGrid] = useRecoilState(isGridState);

  const setGsapTrigger = useSetRecoilState(gsapTriggerState);

  const setIsHovered = useSetRecoilState(itemHoverState);
  const setHoverIdx = useSetRecoilState(itemHoverIdState);
  const setWorksImages = useSetRecoilState(worksImageListState);

  useEffect(() => {
    setWorkList(
      type === "ALL"
        ? works
        : works.filter((work) =>
            type === "BS" ? work.type === "Business" : work.type === "Personal"
          )
    );
    setGsapTrigger((prev) => !prev);
  }, [type, works]);

  useEffect(() => {
    setGsapTrigger((prev) => !prev);
  }, [isGrid]);

  useLayoutEffect(() => {
    setWorksImages(works.map((work) => work.path));
  }, [works]);

  const handleTypeChange = (selectedType: ButtonType) => setType(selectedType);

  return (
    <>
      <div className="w-full max-w-[1400px] px-4 min-[1600px]:px-0 py-5 md:py-10 md:mb-5">
        <div className="w-full flex items-center gap-5 justify-between lg:py-10">
          <div className="w-full flex items-center gap-2 md:gap-5">
            <WorkTypeButton
              onClick={() => handleTypeChange("ALL")}
              currentType={"ALL"}
              type={type}
            />
            <WorkTypeButton
              onClick={() => handleTypeChange("BS")}
              currentType={"BS"}
              type={type}
            />
            <WorkTypeButton
              onClick={() => handleTypeChange("PS")}
              currentType={"PS"}
              type={type}
            />
          </div>
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
                setIsHovered={setIsHovered}
              />
            ) : (
              <ListWorkItem
                key={`list-${work.path}`}
                isMain={false}
                work={work}
                setIsHovered={setIsHovered}
                onChangeIdx={() => setHoverIdx(idx)}
              />
            )
          )}
        </ul>
      </div>
    </>
  );
}
