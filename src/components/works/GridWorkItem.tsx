import { Work } from "@/services/works.service";
import Image from "next/image";
import TransitionLink from "@/components/common/TransitionLink";

type Props = {
  work: Work;
  setIsHover: (bol: boolean) => void;
};

export default function GridWorkItem({ work, setIsHover }: Props) {
  return (
    <li className="w-full flex flex-col items-center justify-between ">
      <TransitionLink
        className="w-full flex group flex-col items-center justify-between relative"
        href={`/work/${work.path}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="w-full flex flex-col">
          <div className="flex overflow-hidden justify-center items-center px-4 sm:px-10 lg:px-20 py-32 bg-gradient-to-t from-lightBagieGray">
            <Image
              className="object-cover max-w-[calc(100%-2rem)] group-hover:scale-110 transition-all aspect-[5/3] ease-out"
              src={`/assets/images/works/${work.path}.png`}
              alt={`${work.path}`}
              width={1600}
              height={720}
              loading="lazy"
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
      </TransitionLink>
    </li>
  );
}
