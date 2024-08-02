import { Work } from "@/services/works.service";
import Image from "next/image";

type Props = {
  work: Work;
};

export default function ListWorkItem({ work }: Props) {
  return (
    <li className="w-full lg:border-b border-lightGray lg:py-32 flex flex-col items-center justify-between">
      <div className="w-full flex flex-col">
        <div className="flex overflow-hidden justify-center items-center px-4 sm:px-10 lg:px-20 py-32 bg-gradient-to-t from-lightBagieGray lg:hidden">
          <Image
            className="object-cover max-w-full block "
            src={`/assets/images/works/${work.path}.png`}
            alt={`${work.path}`}
            width={1600}
            height={720}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="text-2xl md:text-3xl lg:text-5xl w-full border-b lg:border-none border-lightGray py-4">
            {work.title}
          </div>
          <div className="w-full md:w-auto flex justify-between gap-4 md:gap-10 py-4">
            <div className="text-lg md:text-xl lg:text-2xl whitespace-nowrap">
              {work.category.join(" & ")}
            </div>
            <div className="text-lg md:text-xl block lg:hidden">
              {work.year}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
