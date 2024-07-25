import PageAnimationContainer from "@/containers/loading/PageAnimationContainer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-darkIndigo w-full h-full min-h-screen flex flex-col items-center">
      <PageAnimationContainer />
      <div className="w-full flex flex-col items-center py-12 md:py-32">
        <div className="w-full max-w-[1400px] border-b border-gray px-4 min-[1600px]:px-0 py-5 md:py-10 mb-5">
          <h2 className="transition-all text-[36px] md:text-[60px] font-[800] break-keep leading-[48px] md:leading-[80px] text-white">
            Contact Me
          </h2>
        </div>
        <div className="w-[calc(100%-32px)] max-w-[1400px] flex gap-20">
          <div className=" flex-[8]">
            <ContactFormContainer />
          </div>
          <div className=" flex-[2]">
            <div className="w-20 h-20 md:w-[120px] md:h-[120px] relative rounded-full bg-white">
              <Image
                src={"/assets/images/profile.png"}
                alt="my emozi"
                className="object-cover"
                fill
                sizes={"100"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
