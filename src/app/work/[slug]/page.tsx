import WorkDetailContainer from "@/containers/works/WorkDetailContainer";
import { getWorkDetail } from "@/services/works.service";
import { getMetadata } from "@/utils/lib/getMetadata";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description } = await getWorkDetail(slug);
  return getMetadata({
    title: title,
    description,
  });
}

export default function WorkDetailPage({ params: { slug } }: Props) {
  return (
    <>
      <WorkDetailContainer slug={slug} />
    </>
  );
}
