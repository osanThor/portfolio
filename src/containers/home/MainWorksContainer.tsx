import CommonTitle from "@/components/common/CommonTitle";
import LinkButton from "@/components/common/LinkButton";
import WorksAnimationContainer from "./works/WorksAnimationContainer";

export default function MainWorksContainer() {
  return (
    <section className="w-full pt-10 bg-white flex flex-col items-center">
      <div className="w-[calc(100%-32px)] max-w-[1600px]">
        <CommonTitle text="My works" />
        <ul>
          <li className="w-full border-b border-gray py-32 flex items-center justify-between">
            <div className=" text-5xl">TITLE</div>
            <div className=" text-2xl">Development</div>
          </li>
        </ul>
        <div className="w-full pb-10 lg:pb-0 flex items-center justify-center mt-10">
          <LinkButton href="/works" />
        </div>
      </div>
      <WorksAnimationContainer />
    </section>
  );
}
