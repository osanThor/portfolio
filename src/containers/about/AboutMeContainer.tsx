"use client";

import CommonTitle from "@/components/common/CommonTitle";
import { mountedState } from "@/utils/lib/recoil/atom";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import AboutSkillsContainer from "./AboutSkillsContainer";

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
      <div className="max-w-[1400px] flex flex-col lg:flex-row gap-5 md:gap-10">
        <div className="w-full flex flex-col gap-10">
          <p className="md:text-lg leading-7 md:leading-9 break-keep ">
            안녕하세요, 저는 어려운 문제를 해결하는 데 가치를 느끼고,
            <br /> 사용자가 웹을 통해 새로운 경험을 할 수 있도록 하는 데 열정을
            가진 프론트엔드 개발자 이준영입니다.
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
      <div className="w-full  flex flex-col items-center">
        <div className="w-full">
          <CommonTitle text={"Skills"} />
        </div>
        {show && <AboutSkillsContainer />}
      </div>
    </>
  );
}
