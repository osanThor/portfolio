"use client";
import { SkillSlides } from "@/data/about/skills/skillImages";
import { SkilType } from "@/interfaces/InSkills";
import { useEffect, useRef } from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";

type Props = {
  skill: SkilType;
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 10);
};

export default function AboutSkillItemContaienr({ skill }: Props) {
  const targetRef = useRef<HTMLDivElement>(null);

  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      return pixel.b > 50;
    },
    color: () => skill.logoColor,
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2
      );
    },
  };

  const skillTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!skillTitleRef.current) return;
    skillTitleRef.current.innerHTML = skill?.skillTitle;
  }, [skillTitleRef, skill]);

  const skillColors = {
    FE: "text-blue",
    STYLE: "text-red",
    BE: "text-cyan",
  };

  const cateColor = skillColors[skill.skillCategory];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center relative" ref={targetRef}>
        <ParticleImage
          src={SkillSlides[skill.logoNum]}
          width={360}
          height={360}
          scale={0.5}
          entropy={10}
          maxParticles={4000}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor="none"
        />
        <div className="text-center absolute md:relative top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center bg-white/70 md:bg-none ">
          <h3 className={`text-xs mb-1 ${cateColor}`}>{skill.skillCategory}</h3>
          <h2 className="text-xl font-[600]" ref={skillTitleRef} />
        </div>
      </div>
    </div>
  );
}
