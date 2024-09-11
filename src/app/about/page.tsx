import AboutMeContainer from "@/containers/about/AboutMeContainer";
import BottomAnimationContainer from "@/containers/common/BottomAnimationContainer";
import MainContactContainer from "@/containers/home/MainContactContainer";
import { getMetadata } from "@/utils/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata({
    title: "나는 누구인가",
  });
}

export default function AboutPage() {
  return (
    <>
      <div className="w-full flex flex-col items-center pt-12 md:pt-32">
        <div className="w-full max-w-[1400px] border-b border-lightGray px-4 min-[1600px]:px-0 py-5 md:py-10 mb-5">
          <h2 className="transition-all text-[36px] md:text-[60px] font-[800] break-keep leading-[48px] md:leading-[80px]">
            <span className="font-[900] text-blue">Front-End</span> 개발자
            이준영입니다.
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-20 pb-10 pt-5 md:py-20 md:pt-10">
        <AboutMeContainer />
      </div>
      <BottomAnimationContainer />
      <MainContactContainer />
    </>
  );
}
