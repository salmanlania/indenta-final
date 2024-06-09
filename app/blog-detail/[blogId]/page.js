// import BackToTop from "@/app/backToTop";
// import BlogDetailsPage from "../index";

// const BlogDetailsLayout = ({ params }) => {
//   return (
//     <>
//       <BlogDetailsPage getBlog={params} />
//       <BackToTop />
//     </>
//   );
// };

// export default BlogDetailsLayout;


// File: pages/app/blog-detail/[blogId]/page.js

import BackToTop from "@/app/backToTop";
import BlogDetailsPage from "../index";
import BlogData from "@/data/product.json";

export const metadata = {
  title: "Blog Details - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

// Function to generate static paths for all blog IDs
export async function generateStaticParams() {
  const paths = BlogData.blog.map((blog) => ({
    params: {
      blogId: blog.id.toString(),
    },
  }));

  return paths;
}

const BlogDetailsLayout = ({ params }) => {
  return (
    <>
      <BlogDetailsPage getBlog={params} />
      <BackToTop />
    </>
  );
};

export default BlogDetailsLayout;
