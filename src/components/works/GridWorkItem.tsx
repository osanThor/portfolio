import { Work } from "@/services/works.service";
import Image from "next/image";

type Props = {
  work: Work;
};

export default function GridWorkItem({ work }: Props) {
  return (
    <li className="w-full flex flex-col items-center justify-between">
      <div className="w-full flex flex-col">
        <div className="flex items-center px-4 sm:px-10 lg:px-20 py-32 bg-gradient-to-t from-lightBagieGray">
          <Image
            className="object-cover max-w-full"
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
    </li>
  );
}
