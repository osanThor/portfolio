import CommonTitle from "@/components/common/CommonTitle";
import LinkButton from "@/components/common/LinkButton";
import WorksAnimationContainer from "./works/WorksAnimationContainer";
import { getFeaturedWorks } from "@/services/works.service";
import ListWorkItem from "@/components/works/ListWorkItem";

export default async function MainWorksContainer() {
  const works = await getFeaturedWorks();
  return (
    <section className="w-full pt-10 bg-white flex flex-col items-center">
      <div className="w-[calc(100%-32px)] max-w-[1600px]">
        <CommonTitle text="My works" />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-10 lg:gap-0">
          {works.slice(0, 4).map((work) => (
            <ListWorkItem key={work.path} work={work} />
          ))}
        </ul>
        <div className="w-full pb-10 lg:pb-0 flex items-center justify-center mt-10">
          <LinkButton href="/works" />
        </div>
      </div>
      <WorksAnimationContainer works={works} />
    </section>
  );
}
