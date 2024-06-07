import Header from "@/components/Header/Header";
import BackToTop from "../backToTop";
import HelpFaqPage from "./index";

export const metadata = {
  title: "Help & FAQs - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const HelpFaqLayout = () => {
  return (
    <>
      {/* <Header
        headerTransparent="header-transparent"
        headerSticky="header-sticky"
        btnClass="rainbow-gradient-btn"
      /> */}
      <HelpFaqPage />
      <BackToTop />
    </>
  );
};

export default HelpFaqLayout;
