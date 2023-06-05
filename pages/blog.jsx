import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import aboutImage from "@/assets/20230330_24542.jpg";
import Head from "next/head";

const Blog = () => {
  const blogPosts = [];

  return (
    <>
    <div className="bg-black text-[#999] min-h-screen">
      <nav className="sticky top-0 border-b border-b-neutral-800  backdrop-blur-lg ">
        <section className="max-w-[50rem] mx-auto ">
          <Header />
        </section>
      </nav>

      <section className="max-w-[50rem] mx-auto mt-4 pb-10 px-4">
        <div className="w-24 md:w-32 rounded-lg overflow-hidden">
          <Image src={aboutImage} alt="aboutImage" className="h-full w-full" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-purple-600 font-orbitron mt-4 ">Blog</h1>
        <h2 className="font-medium text-xl font-josefin">
          I write once in every blue moon, everything and anything here.
        </h2>
      </section>

      <section className="max-w-[50rem] mx-auto mt-4 pb-10 px-4">
        {}
        {blogPosts < 1 ? (
          <p>No post yet.</p>
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
    </>
  );
};

export default Blog;
