import CommonTitle from "@/components/common/CommonTitle";
import LinkButton from "@/components/common/LinkButton";
import WorksAnimationContainer from "./works/WorksAnimationContainer";
import { getFeaturedWorks } from "@/services/works.service";
import MainWorksListContainer from "./works/MainWorksListContainer";

export default async function MainWorksContainer() {
  const works = await getFeaturedWorks();
  return (
    <section className="w-full pt-10 bg-white flex flex-col items-center">
      <div className="w-[calc(100%-32px)] max-w-[1600px]">
        <CommonTitle text="My works" />
        <MainWorksListContainer works={works} />
        <div className="w-full pb-10 lg:pb-0 flex items-center justify-center mt-10">
          <LinkButton href="/works" />
        </div>
      </div>
      <WorksAnimationContainer works={works} />
    </section>
  );
}
