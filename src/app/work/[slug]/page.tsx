import WorkDetailContainer from "@/containers/works/WorkDetailContainer";
import { getWorkDetail } from "@/services/works.service";
import { getMetadata } from "@/utils/lib/getMetadata";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { title, description } = await getWorkDetail(slug);
  return getMetadata({
    title: title,
    description,
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <WorkDetailContainer slug={slug} />
    </>
  );
}
