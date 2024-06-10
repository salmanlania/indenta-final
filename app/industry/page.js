import BackToTop from "../backToTop";
import BlogPage from "./index";

export const metadata = {
  title: "Indenta AI - || Industry",
  description: "Indenta AI - || Industry",
};

const BlogLayout = () => {
  return (
    <>
      <BlogPage />
      <BackToTop />
    </>
  );
};

export default BlogLayout;
