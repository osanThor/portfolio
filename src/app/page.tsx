import RoundBoxContainer from "@/containers/common/RoundBoxContainer";
import MainAboutContainer from "@/containers/home/MainAboutContainer";
import MainBannerContainer from "@/containers/home/MainBannerContainer";
import MainContactContainer from "@/containers/home/MainContactContainer";
import MainWorksContainer from "@/containers/home/MainWorksContainer";

export default function Home() {
  return (
    <>
      <MainBannerContainer />
      <MainAboutContainer />
      <MainWorksContainer />
      <RoundBoxContainer />
      <MainContactContainer />
    </>
  );
}
