import LinkButton from "@/components/common/LinkButton";
import SiteLinkButton from "@/components/works/SiteLinkButton";
import PageAnimationContainer from "@/containers/loading/PageAnimationContainer";
import { getWorkDetail } from "@/services/works.service";
import { getMetadata } from "@/utils/getMetadata";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { title } = await getWorkDetail(slug);
  return getMetadata({
    title: title,
  });
}

export default async function WorkDetailPage({ params: { slug } }: Props) {
  const { title, link, type, year, category } = await getWorkDetail(slug);
  return (
    <>
      <PageAnimationContainer />
      <article className="w-full min-h-screen flex flex-col items-center py-12 md:py-32">
        <div className="w-[calc(100%-32px)] max-w-[1400px] mb-20 flex flex-col gap-7 md:gap-20">
          <h2 className="text-4xl leading-[60px] md:text-7xl lg:text-9xl font-[800] break-keep">
            {title}
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="content-['제공'] relative before:absolute before:bottom-[120%] before:text-lightGray before:text-xs flex-1 text-gray mt-4 pt-2 md:mt-10 md:pt-5 border-t border-lightGray">
              {category.join(" & ")}
            </div>
            <div className="before:content-['타입'] relative before:absolute before:bottom-[120%] before:text-lightGray before:text-xs flex-1 text-gray mt-4 pt-2 md:mt-10 md:pt-5 border-t border-lightGray">
              {type}
            </div>
            <div className="before:content-['제작_연도'] relative before:absolute before:bottom-[120%] before:text-lightGray before:text-xs flex-1 text-gray mt-4 pt-2 md:mt-10 md:pt-5 border-t border-lightGray">
              {year}
            </div>
          </div>
        </div>
        <Image
          className="object-cover max-w-full "
          src={`/assets/images/works/${slug}.png`}
          alt={`bn-${slug}`}
          width={1600}
          height={720}
        />
        <section className="w-[calc(100%-32px)] max-w-[1600px] mt-10 flex flex-col item-center">
          <div className="w-full flex justify-center mb-10">
            <SiteLinkButton link={link} />
          </div>
          <div className="flex justify-center">
            <LinkButton href="/works" text="목록으로" />
          </div>
        </section>
      </article>
    </>
  );
}
