"use client";

import CommonTitle from "@/components/common/CommonTitle";
import { mountedState } from "@/utils/lib/recoil/atom";
import Image from "next/image";
import AboutSkillsContainer from "./AboutSkillsContainer";
import {
  BESkills,
  DBSkills,
  DesignSkills,
  FESkills,
  Repositories,
} from "@/data/about/skills/allSkills";
import Tootip from "@/components/common/Tootip";

export default function AboutMeContainer() {
  return (
    <>
      <div className="w-full flex flex-col gap-20 items-center bg-gradient-to-t from-lightBagieGray pb-20">
        <div className="w-[calc(100%-32px)] max-w-[1400px] flex flex-col lg:flex-row gap-5 md:gap-10">
          <div className="w-full flex flex-col gap-10">
            <p className="md:text-lg leading-7 md:leading-9 break-keep ">
              <strong>데이터를 빠르고 효율적이게 노출</strong>할 수 있는지
              고민하는 개발자 이준영입니다.
              <br /> 솔루션 기업에서 재직기간동안 프론트엔드를 담당하였으며{" "}
              <br />
              주로 커뮤니티와 쇼핑몰 등 클라이언트에 맞는 기술을 찾고 적용하고
              배포하는 업무를 해왔습니다.
              <br /> 크고 작은 총 20여개의 프로젝트 클라이언트 구축을 해오며
              기술적 도약과 혹은 실패를 경험했으며 <br />
              이는 개발자로서 필요한 책임감이라는 역량을 기르게 된
              경험이었습니다.
            </p>
            <div className="text-gray drop-shadow">무한~도전~</div>
          </div>
          <div className="w-full md:w-[50%] h-auto relative">
            <Image
              src={"/assets/images/res.JPG"}
              alt={"its me"}
              width={1000}
              height={1400}
              className="object-cover"
            />
          </div>
        </div>
        <ul className="w-[calc(100%-32px)] max-w-[1400px] py-20 flex flex-col md:flex-row gap-14 justify-between">
          <li className="before:content-['01'] w-full border-t border-lightGray py-10 relative before:absolute before:top-0 before:-translate-y-7 before:text-gray before:text-xs">
            <h3 className="text-xl md:text-2xl font-[700] text-darkIndigo mb-4">
              문제 해결
            </h3>
            <p className="text-base md:text-lg text-justify leading-7 break-keep text-darkIndigo">
              저는 복잡하고 도전적인 문제를 해결하는 데 있어 가장 중요한 것은
              포기하지 않는 것임을 알고 있습니다. 실제 프로젝트를 하면서
              어려울지라도 끝까지 분석하고 도전해보면 어떻게든 문제에 맞는
              최적의 해결책을 찾아낼 수 있습니다. 또한, 새로운 기술과 도구를
              빠르게 습득하고 이를 문제 해결에 적용하는 유연한 사고를 가질 수
              있습니다.
            </p>
          </li>
          <li className="before:content-['02'] w-full border-t border-lightGray py-10 relative before:absolute before:top-0 before:-translate-y-7 before:text-gray before:text-xs">
            <h3 className="text-xl md:text-2xl font-[700] text-darkIndigo mb-4">
              지속적인 학습
            </h3>
            <p className="text-base md:text-lg text-justify leading-7 break-keep text-darkIndigo">
              기술은 빠르게 발전하고 있기 때문에, 최신 트렌드와 기술을
              지속적으로 학습하는 것이 중요합니다. 저는 정기적으로 기술 서적을
              읽고, 온라인 강의를 수강하며, 개발 커뮤니티에 참여하여 새로운
              지식을 습득할 것입니다. 또한, 학습한 내용을 실제 프로젝트에
              적용하고, 블로그나 기술 문서를 작성하여 끊임없이 정진할 것입니다.
            </p>
          </li>
          <li className="before:content-['03'] w-full border-t border-lightGray py-10 relative before:absolute before:top-0 before:-translate-y-7 before:text-gray before:text-xs">
            <h3 className="text-xl md:text-2xl font-[700] text-darkIndigo mb-4">
              협업 및 커뮤니케이션
            </h3>
            <p className="text-base md:text-lg text-justify leading-7 break-keep text-darkIndigo">
              개발자, 디자이너, 기획자의 업무를 모두 경험해보면서 각 업무의
              이해도와 고충을 잘 알고 있습니다. 이러한 경험을 통해 협업의
              중요성을 깊이 인식하게 되었습니다. 팀의 일원으로서 다른 개발자,
              디자이너, 비즈니스 담당자 등과 원활하게 협력하여 공동의 목표를
              달성하고자 합니다. 각 역할에 대한 이해를 바탕으로, 서로의 의견을
              존중하고 효과적으로 소통하며, 팀 전체의 성장을 도모하겠습니다.
            </p>
          </li>
        </ul>
      </div>
      <div className="w-[calc(100%-32px)] max-w-[1400px] flex flex-col items-center gap-10">
        <div className="w-full">
          <CommonTitle text={"Skills"} />
        </div>
        <AboutSkillsContainer />
        <ul className="w-full flex flex-col pt-20 md:flex-row md:flex-wrap gap-14 justify-between">
          <li className="flex-1">
            <ul className="flex flex-col gap-14 ">
              <li className="before:content-['Design'] w-full border-t border-lightGray py-10  relative before:absolute before:top-0 before:-translate-y-7 before:text-gray before:text-xs">
                <ul className="w-full grid grid-cols-3 gap-7">
                  {DesignSkills.map((skill, idx) => (
                    <SkillItem key={`design-${idx}`} skill={skill} />
                  ))}
                </ul>
              </li>
              <li className="before:content-['Remote_Repository'] w-full border-t border-lightGray py-10  relative before:absolute before:top-0 before:-translate-y-7 before:text-gray before:text-xs">
                <ul className="w-full grid grid-cols-3 gap-7">
                  {Repositories.map((skill, idx) => (
                    <SkillItem key={`repo-${idx}`} skill={skill} />
                  ))}
                </ul>
              </li>
            </ul>
          </li>
          <li className="before:content-['Front-End'] flex-1 border-t border-lightGray py-10  relative before:absolute before:top-0 before:-translate-y-7 before:text-gray before:text-xs">
            <ul className="w-full grid grid-cols-3 gap-7">
              {FESkills.map((skill, idx) => (
                <SkillItem key={`fe-${idx}`} skill={skill} />
              ))}
            </ul>
          </li>
          <li className="flex-1">
            <ul className="flex flex-col gap-14 ">
              <li className="before:content-['Back-End'] w-full border-t border-lightGray py-10  relative before:absolute before:top-0 before:-translate-y-7 before:text-gray before:text-xs">
                <ul className="w-full grid grid-cols-3 gap-7">
                  {BESkills.map((skill, idx) => (
                    <SkillItem key={`be-${idx}`} skill={skill} />
                  ))}
                </ul>
              </li>
              <li className="before:content-['DB'] w-full border-t border-lightGray py-10  relative before:absolute before:top-0 before:-translate-y-7 before:text-gray before:text-xs">
                <ul className="w-full grid grid-cols-3 gap-7">
                  {DBSkills.map((skill, idx) => (
                    <SkillItem key={`db-${idx}`} skill={skill} />
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

type ItemProps = {
  skill: { name: string; url: string };
};

function SkillItem({ skill }: ItemProps) {
  return (
    <li className="w-full h-20 flex justify-center relative items-center group">
      <div className="w-20 h-20 group-hover:shadow-md transition-all rounded-xl flex justify-center items-center">
        <div className="w-[68px] h-[68px] rounded-lg overflow-hidden relative">
          <Image
            src={skill.url}
            alt={`${skill.name} image`}
            className="object-contain w-full"
            sizes="68"
            fill
          />
        </div>
      </div>
      <Tootip text={skill.name} />
    </li>
  );
}
