"use client";
import GridIcon from "@/components/common/ui/icons/GridIcon";
import ListIcon from "@/components/common/ui/icons/ListIcon";
import GridWorkItem from "@/components/works/GridWorkItem";
import ListWorkItem from "@/components/works/ListWorkItem";
import { Work } from "@/services/works.service";
import { useEffect, useState } from "react";

type Props = {
  works: Work[];
};

export default function WorksListContainer({ works }: Props) {
  const [workList, setWorkList] = useState<Work[]>(works);
  const [type, setType] = useState<"ALL" | "BS" | "PS">("ALL");
  const [isGrid, setIsGrid] = useState<boolean>(true);

  useEffect(() => {
    if (type === "ALL") {
      setWorkList(works);
    } else if (type === "BS") {
      const filterArr = works.filter((work) => work.type === "Business");
      setWorkList(filterArr);
    } else if (type === "PS") {
      const filterArr = works.filter((work) => work.type === "Personal");
      setWorkList(filterArr);
    }
  }, [type, works]);

  return (
    <>
      <div className="w-full max-w-[1400px] px-4 min-[1600px]:px-0 py-5 md:py-10 md:mb-5">
        <div className="w-full flex items-center gap-5 justify-between lg:py-10">
          <div className="w-full flex items-center gap-2 md:gap-5">
            <button
              onClick={() => setType("ALL")}
              className={`h-10 md:h-[60px] lg:h-20 flex items-center justify-center px-4 md:px-7 text-sm sm:text-lg md:text-xl font-[700] border transition-all rounded-md lg:rounded-xl ${
                type === "ALL"
                  ? "border-black bg-black text-white hover:opacity-80"
                  : "border-lightGray"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setType("BS")}
              className={`h-10 md:h-[60px] lg:h-20 flex items-center justify-center px-4 md:px-7 text-sm sm:text-lg md:text-xl font-[700] border transition-all rounded-md lg:rounded-xl ${
                type === "BS"
                  ? "border-black bg-black text-white hover:opacity-80"
                  : "border-lightGray"
              }`}
            >
              Business
            </button>
            <button
              onClick={() => setType("PS")}
              className={`h-10 md:h-[60px] lg:h-20 flex items-center justify-center px-4 md:px-7 text-sm sm:text-lg md:text-xl font-[700] border transition-all rounded-md lg:rounded-xl ${
                type === "PS"
                  ? "border-black bg-black text-white hover:opacity-80"
                  : "border-lightGray"
              }`}
            >
              Personal
            </button>
          </div>
          <div className=" hidden lg:flex items-center gap-5">
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
                isGrid
                  ? "border-gray"
                  : "bg-black border-black text-white hover:opacity-70"
              }`}
            >
              <ListIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1600px] px-4 min-[1600px]:px-0 py-5 md:py-10 mb-5">
        <ul
          className={`w-full grid grid-cols-1 md:grid-cols-2 ${
            isGrid ? "" : "lg:grid-cols-1"
          } gap-5 md:gap-10`}
        >
          {workList.map((work) =>
            isGrid ? (
              <GridWorkItem key={`grid-${work.path}`} work={work} />
            ) : (
              <ListWorkItem key={`list-${work.path}`} work={work} />
            )
          )}
        </ul>
      </div>
    </>
  );
}
