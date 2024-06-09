// import BackToTop from "@/app/backToTop";
// import BlogDetailsPage from "../index";

// export const metadata = {
//   title: "Industry Details",
//   description: "Industry Details",
// };

// const BlogDetailsLayout = ({ params }) => {
//   return (
//     <>
//       <BlogDetailsPage getBlog={params} />
//       <BackToTop />
//     </>
//   );
// };

// export default BlogDetailsLayout;
import BackToTop from "@/app/backToTop";
import BlogDetailsPage from "../index";

export const metadata = {
  title: "Industry Details",
  description: "Industry Details",
};

const BlogDetailsLayout = ({ params }) => {
  return (
    <>
      <BlogDetailsPage getBlog={params} />
      <BackToTop />
    </>
  );
};

export default BlogDetailsLayout;
