"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import sliderSkills from "@/data/about/skills/sliderSkill.json";
import AboutSkillItemContaienr from "@/containers/about/AboutSkillItemContaienr";
import { SkilType } from "@/interfaces/InSkills";

export default function AboutSkillsContainer() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-10 ">
      <div className="flex-1 max-w-[400px] min-h-[400px]">
        <Swiper
          navigation={true}
          loop={true}
          slidesPerView={1}
          className="mySwiper"
        >
          {sliderSkills?.map((skill) => (
            <SwiperSlide key={skill.id}>
              <AboutSkillItemContaienr skill={skill as SkilType} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="md:text-lg leading-7 md:leading-9 break-keep">
        HTML5, CSS3, ES6에 준수하여 바닐라 Javascript 시멘틱 마크업, 효율적인
        DOM 조작을 이해하고,
        <br /> React 라이브러리를 이용한 SPA 구현과 Next 프레임워크를 사용한
        SSR, React를 활용해 SPA 웹을 구축할 수 있습니다. <br />
        Redux를 이용해 효율적인 컴포넌트 상태관리와 Redux 미들웨어를 이용한
        비동기 RestAPI 서버통신을 할 수 있습니다.
      </p>
    </div>
  );
}
