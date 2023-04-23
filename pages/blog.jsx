import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import aboutImage from "@/assets/p4n2ny.jpg";

const Blog = () => {
  const blogPosts = [];

  return (
    <div className="bg-black text-[#999] min-h-screen">
      <nav className="sticky top-0 border-b border-b-neutral-800  backdrop-blur-lg ">
        <section className="max-w-[60rem] mx-auto ">
          <Header />
        </section>
      </nav>

      <section className="max-w-[60rem] mx-auto mt-4 pb-10 px-4">
        <div className="w-48 md:w-60 rounded-lg overflow-hidden">
          <Image src={aboutImage} alt="aboutImage" className="h-full w-full" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white ">Blog</h1>
        <h2 className="font-medium text-xl">
          See a piece of my mind, ideas, thought, vision and more.
        </h2>
      </section>

      <section className="max-w-[60rem] mx-auto mt-4 pb-10 px-4">
        {}
        {blogPosts < 1 ? (
          <p>No posts</p>
        ) : (
          blogPosts.map((blog) => (
            <>
              <p>{blog?.post}</p>
            </>
          ))
        )}
      </section>

      <section className="fixed bottom-0 w-full backdrop-blur-2xl">
        <Footer />
      </section>
    </div>
  );
};

export default Blog;