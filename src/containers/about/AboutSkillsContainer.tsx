"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import sliderSkills from "@/data/about/skills/sliderSkill.json";
import AboutSkillItemContaienr, {
  SkilType,
} from "@/containers/about/AboutSkillItemContaienr";

export default function AboutSkillsContainer() {
  return (
    <div className="flex-1 max-w-[350px] min-h-[400px]">
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
  );
}
