import RoundBoxContainer from "@/containers/common/RoundBoxContainer";
import MainContactContainer from "@/containers/home/MainContactContainer";
import WorkContentsContainer from "@/containers/works/WorkContentsContainer";
import { getMetadata } from "@/utils/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata({
    title: "나는 뭘했나",
  });
}
export default function WorksPage() {
  return (
    <>
      <WorkContentsContainer />
      <RoundBoxContainer />
      <MainContactContainer />
    </>
  );
}
