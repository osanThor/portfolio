import { Work } from "@/services/works.service";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction } from "react";

type Props = {
  work: Work;
  setIsHovered?: React.Dispatch<SetStateAction<boolean>>;
};

export default function GridWorkItem({ work, setIsHovered }: Props) {
  return (
    <li className="w-full flex flex-col items-center justify-between ">
      <Link
        className="w-full flex group flex-col items-center justify-between relative"
        href={"/"}
        onMouseEnter={() => setIsHovered && setIsHovered(true)}
        onMouseLeave={() => setIsHovered && setIsHovered(false)}
      >
        <div className="w-full flex flex-col">
          <div className="flex overflow-hidden justify-center items-center px-4 sm:px-10 lg:px-20 py-32 bg-gradient-to-t from-lightBagieGray">
            <Image
              className="object-cover max-w-full group-hover:scale-110 transition-all ease-out"
              src={`/assets/images/works/${work.path}.png`}
              alt={`${work.path}`}
              width={1600}
              height={720}
            />
          </div>
          <div className="text-2xl md:text-3xl font-[700] w-full border-b border-lightGray py-4">
            {work.title}
          </div>
          <div className="w-full flex justify-between gap-4 md:gap-10 py-4">
            <div className="text-lg md:text-xl whitespace-nowrap">
              {work.category.join(" & ")}
            </div>
            <div className="text-lg md:text-xl">{work.year}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}
