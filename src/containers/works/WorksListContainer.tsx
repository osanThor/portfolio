import { Work } from "@/services/works.service";

type Props = {
  works: Work[];
};

export default function WorksListContainer({ works }: Props) {
  return (
    <div className="w-full max-w-[1400px] px-4 min-[1600px]:px-0 py-5 md:py-10 mb-5">
      <div className="w-full flex items-center gap-5 py-10">
        <button>ALL</button>
        <button>Business</button>
        <button>Personal</button>
      </div>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {works.map((work) => (
          <li
            key={work.path}
            className="w-full  border-b border-lightGray flex flex-col items-center justify-between"
          >
            <div className="w-full flex flex-col">
              <div className="text-2xl md:text-3xl w-full border-b border-lightGray py-4">
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
        ))}
      </ul>
    </div>
  );
}
