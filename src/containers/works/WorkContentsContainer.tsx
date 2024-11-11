import WorksListContainer from "@/containers/works/WorksListContainer";
import { getAllWorks } from "@/services/works.service";

export default async function WorkContentsContainer() {
  const works = await getAllWorks();
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 md:py-32 z-10 bg-white">
      <div className="w-full max-w-[1400px] border-b border-lightGray px-4 min-[1600px]:px-0 py-5 md:py-10 mb-5">
        <h2 className="transition-all text-[36px] md:text-[60px] font-[800] break-keep leading-[48px] md:leading-[80px]">
          항상 발전하자는 자세로 프로젝트에 임하겠습니다.
        </h2>
      </div>
      <WorksListContainer works={works} />
    </div>
  );
}
