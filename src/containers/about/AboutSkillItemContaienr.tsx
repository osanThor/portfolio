"use client";
import { Skill } from "@/data/about/skills/skillImages";
import { useEffect, useRef } from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
export type SkilType = {
  id: number;
  logoNum: number;
  logoColor: string;
  skillCategory: "FE" | "BE" | "STYLE";
  skillTitle: string;
  skillDes: string;
};
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
      <div className="flex flex-col items-center" ref={targetRef}>
        <ParticleImage
          src={Skill[skill.logoNum]}
          width={360}
          height={360}
          scale={0.5}
          entropy={10}
          maxParticles={4000}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor="white"
        />
        <div className="text-center">
          <h2 className={`text-xs mb-1 ${cateColor}`}>{skill.skillCategory}</h2>
          <h1 className="text-xl font-[600]" ref={skillTitleRef} />
        </div>
      </div>
    </div>
  );
}
