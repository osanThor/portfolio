import { Work } from "@/services/works.service";
import Image from "next/image";
import TransitionLink from "@/components/common/TransitionLink";

type Props = {
  isMain: boolean;
  work: Work;
  setIsHover: (bol: boolean) => void;
  onChangeHoveredItemId: () => void;
};

export default function ListWorkItem({
  isMain,
  work,
  setIsHover,
  onChangeHoveredItemId,
}: Props) {
  return (
    <li className="w-full group flex flex-col items-center justify-between">
      <TransitionLink
        className={`${
          isMain ? "lg:py-32" : "lg:py-7"
        } w-full lg:border-b border-lightGray flex flex-col items-center justify-between relative`}
        href={`/work/${work.path}`}
        onMouseEnter={() => {
          setIsHover(true);
          onChangeHoveredItemId();
        }}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="w-full flex flex-col">
          <div className="flex overflow-hidden justify-center items-center px-4 sm:px-10 lg:px-20 py-32 bg-gradient-to-t from-lightBagieGray lg:hidden">
            <Image
              className="object-cover max-w-full block "
              src={`/assets/images/works/${work.path}.png`}
              alt={`${work.path}`}
              width={1600}
              height={720}
              loading="lazy"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row transition-all group-hover:text-gray text-black px-0 lg:group-hover:px-10">
            <div className="flex-1 text-2xl md:text-3xl lg:text-5xl w-full border-b lg:border-none border-lightGray py-4">
              {work.title}
            </div>
            <div className="w-full md:w-auto flex justify-between items-center gap-4 md:gap-10 py-4">
              <div className="text-lg md:text-xl lg:text-2xl whitespace-nowrap">
                {work.category.join(" & ")}
              </div>
              <div className="text-lg md:text-xl block">{work.year}</div>
            </div>
          </div>
        </div>
      </TransitionLink>
    </li>
  );
}
