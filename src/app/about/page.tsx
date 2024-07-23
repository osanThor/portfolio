import AboutSkillsContainer from "@/containers/about/AboutSkillsContainer";
import PageAnimationContainer from "@/containers/loading/PageAnimationContainer";

export default function AboutPage() {
  return (
    <>
      <PageAnimationContainer />
      <div className="w-full flex flex-col items-center py-12 md:py-32">
        <div className="w-full max-w-[1600px] border-b border-gray px-4 min-[1600px]:px-0 py-5 md:py-10 mb-5">
          <h2 className="transition-all text-4xl lg:text-6xl font-[800] break-keep leading-[48px]">
            뭐라고 써야할 지 모르겠어용~~
          </h2>
        </div>
        <div className="w-[calc(100%-32px)] max-w-[1600px] flex items-center">
          <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-10 ">
            <AboutSkillsContainer />
            <p className="md:text-lg leading-7 md:leading-9 break-keep">
              HTML5, CSS3, ES6에 준수하여 바닐라 Javascript 시멘틱 마크업,
              효율적인 DOM 조작과 비동기 프로세스를 이해하고 있습니다.
              <br /> React 라이브러리를 이용한 SPA 구현과 Next 프레임워크를
              사용한 SSR, React 라이프사이클에 대해 이해하고 있으며 이를 활용해
              웹을 구축할 수 있습니다. <br />
              Redux를 이용해 효율적인 컴포넌트 상태관리와 Redux 미들웨어를
              이용한 비동기 RestAPI 서버통신을 할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
