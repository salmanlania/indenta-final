import Header from "@/components/Header/Header";
import BackToTop from "../backToTop";
import HelpFaqPage from "./index";

export const metadata = {
  title: "Indenta AI - || Services",
  description: "Indenta AI - || Services",
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
