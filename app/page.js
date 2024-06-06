import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "Home - || Indenta AI",
  description: "Indenta AI",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
