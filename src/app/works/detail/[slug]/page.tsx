import PageAnimationContainer from "@/containers/loading/PageAnimationContainer";

type Props = {
  params: {
    slug: string;
  };
};
export default function WorkDetailPage({ params: { slug } }: Props) {
  return (
    <>
      <PageAnimationContainer />
      <div>{slug}WorkDetailPage</div>
    </>
  );
}
