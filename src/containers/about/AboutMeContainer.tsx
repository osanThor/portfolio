"use client";

import CommonTitle from "@/components/common/CommonTitle";
import { mountedState } from "@/utils/lib/recoil/atom";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import AboutSkillsContainer from "./AboutSkillsContainer";
import {
  BESkills,
  DBSkills,
  DesignSkills,
  FESkills,
  Repositories,
} from "@/data/about/skills/allSkills";
import Tootip from "@/components/common/Tootip";

const START_DATE = "2021-11-01";

export default function AboutMeContainer() {
  const startDate = moment(START_DATE);
  const currentDate = moment();
  const yearsOfExperience = currentDate.diff(startDate, "years");
  const monthsOfExperience = currentDate.diff(
    startDate.add(yearsOfExperience, "years"),
    "months"
  );

  const mounted = useRecoilValue(mountedState);
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (!mounted) return;
    setTimeout(() => {
      setShow(true);
    }, 400);
  }, [mounted]);
  const [currenYear, setCurrentYear] = useState<number>(0);
  const [currentMonth, setCurrenttMonth] = useState<number>(0);

  useEffect(() => {
    if (!show) return;
    if (yearsOfExperience <= currenYear) return;
    setTimeout(() => {
      setCurrentYear(currenYear + 1);
    }, 100);
  }, [currenYear, show]);
  useEffect(() => {
    if (!show) return;
    if (monthsOfExperience <= currentMonth) return;
    setTimeout(() => {
      setCurrenttMonth(currentMonth + 1);
    }, 100);
  }, [currentMonth, show]);

  return (
    <>
      <div className="w-full flex flex-col gap-20 items-center bg-gradient-to-t from-lightBagieGray pb-20">
        <div className="w-[calc(100%-32px)] max-w-[1400px] flex flex-col lg:flex-row gap-5 md:gap-10">
          <div className="w-full flex flex-col gap-10">
            <p className="md:text-lg leading-7 md:leading-9 break-keep ">
              안녕하세요, 저는 어려운 문제를 해결하는 데 가치를 느끼고,
              <br /> 사용자가 웹을 통해 새로운 경험을 할 수 있도록 하는 데
              열정을 가진 프론트엔드 개발자 이준영입니다.
              <br />
              저는{" "}
              <strong className="text-2xl text-blue font-[900]">
                [{currenYear}년 {currentMonth}개월]<sup>+</sup>
              </strong>
              차 웹 개발 경력을 가지고 있으며, <br />그 동안 다양한 프로젝트에서
              사용자 친화적인 UI를 설계하고 구현하는 데 주력해 왔습니다.
              <br /> HTML, CSS, JavaScript를 마크업을 기본으로 하는 프론트엔드
              개발 기술을 보유하고 있으며,
              <br /> React.js, Next.js와 같은 최신 프레임워크를 활용하여
              효율적이고 확장 가능한 웹 애플리케이션을 개발하는 데 익숙합니다.
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
            <p className="text-base md:text-lg leading-7 break-keep text-darkIndigo">
              저는 복잡하고 도전적인 문제를 해결하는 데 있어 가장 중요한 것은
              포기하지 않는 것임을 알고 있습니다.
              <br /> 실제 프로젝트를 하면서 어려울지라도 끝까지 분석하고
              도전해보면 어떻게든 문제에 맞는 최적의 해결책을 찾아낼 수
              있습니다. 또한, 새로운 기술과 도구를 빠르게 습득하고 이를 문제
              해결에 적용하는 유연한 사고를 가질 수 있습니다.
            </p>
          </li>
          <li className="before:content-['02'] w-full border-t border-lightGray py-10 relative before:absolute before:top-0 before:-translate-y-7 before:text-gray before:text-xs">
            <h3 className="text-xl md:text-2xl font-[700] text-darkIndigo mb-4">
              지속적인 학습
            </h3>
            <p className="text-base md:text-lg leading-7 break-keep text-darkIndigo">
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
            <p className="text-base md:text-lg leading-7 break-keep text-darkIndigo">
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
        {show && <AboutSkillsContainer />}
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

type SkillProps = {
  skill: { name: string; url: string };
};

function SkillItem({ skill }: SkillProps) {
  return (
    <li className="w-full h-20 flex justify-center relative items-center group">
      <div className="w-20 h-20 group-hover:shadow-md transition-all rounded-xl flex justify-center items-center">
        <div className="w-[68px] h-[68px] rounded-lg overflow-hidden relative">
          <Image
            src={skill.url}
            alt={`${skill.name} image`}
            className="object-contain w-full"
            fill
          />
        </div>
      </div>
      <Tootip text={skill.name} />
    </li>
  );
}
