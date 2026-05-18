import ContactSidebar from "@/components/contact/ContactSidebar";
import ContactFormContainer from "@/containers/contact/ContactFormContainer";
import { getMetadata } from "@/utils/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata({
    title: "Contact",
  });
}

export default function ContactPage() {
  return (
    <div className="bg-darkIndigo w-full h-full min-h-screen flex flex-col items-center">
      <div className="w-full flex flex-col items-center py-12 md:py-32">
        <div className="w-full max-w-[1400px] border-b border-gray px-4 min-[1600px]:px-0 py-5 md:py-10 mb-5">
          <h2 className="transition-all text-[36px] md:text-[60px] font-[800] break-keep leading-[48px] md:leading-[80px] text-white">
            Contact Me
          </h2>
        </div>
        <div className="w-[calc(100%-32px)] max-w-[1400px] flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-20">
          <div className="pl-8 flex-[8]">
            <ContactFormContainer />
          </div>
          <div className="flex-[2]">
            <ContactSidebar showProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
