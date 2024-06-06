"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import Help from "@/components/Help/Help";
import BackToTop from "../backToTop";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";

const HelpFaqPage = () => {
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="d-none" />

            <PopupMobileMenu />
            {/* <LeftDashboardSidebar /> */}

            <Help />
          </div>
          <BackToTop />
        </Context>
      </main>
      <Footer />
      <Copyright />
    </>
  );
};

export default HelpFaqPage;