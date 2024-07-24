"use client";

import LinkButton from "@/components/common/LinkButton";
import Image from "next/image";

export default function MainContactContainer() {
  return (
    <section className="w-full min-h-[calc(100vh-40px)] bg-darkIndigo py-[120px] flex flex-col items-center justify-center">
      <div className="w-[calc(100%-32px)] max-w-[1600px] flex items-center">
        <div className="flex flex-col items-start gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5 md:gap-10 items-center">
              <div className="w-20 h-20 md:w-[120px] md:h-[120px] relative rounded-full bg-white">
                <Image
                  src={"/assets/images/profile.png"}
                  alt="my emozi"
                  className="object-cover"
                  fill
                  sizes={"100"}
                />
              </div>
              <div className=" transition-all text-4xl md:text-5xl lg:text-6xl font-[700] text-white">
                안녕하세요.
              </div>
            </div>
            <div className="transition-all text-3xl md:text-4xl lg:text-5xl font-[700] text-white">
              같이 일하고 싶습니다~!
            </div>
          </div>
          <LinkButton text="Contact Me" href="/contact" />
        </div>
      </div>
    </section>
  );
}
