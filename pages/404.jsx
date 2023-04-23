import Footer from "@/components/Footer";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className=" bg-black text-[#999] h-screen">
      <section className="max-w-[60rem] mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className=" text-lg md:text-xl">Hi there, this page you are trying to access is not available.</h2>
          <p className=" text-lg md:text-xl mb-8">But don&apos;t worry, Lets us take you home.</p>

          <Link href="/">
            <span className=" underline text-2xl font-bold md:text-xl">Home</span>
          </Link>
        </div>
      </section>
      <section className="fixed bottom-0 w-full backdrop-blur-2xl">
        <Footer />
      </section>
    </div>
  );
}
