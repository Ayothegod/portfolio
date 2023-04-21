import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import dummyImage from "@/assets/Screenshot (155).png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayomide Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black text-[#999] py-1">
        <nav className="sticky top-0 border-b border-b-zinc-800 ">
          <section className="max-w-[60rem] mx-auto ">
            <Header />
          </section>
        </nav>
        <main className="px-4">
          <section className="max-w-[60rem] mx-auto mt-4">
            <h1 className="font-bold text-white text-3xl mb-2">
              Hi, I&apos;m Ayomide
            </h1>
            <p className=" leading-7 ">
              I&apos;m a{" "}
              <span className="text-green-700">Software Developer</span>. I
              enjoy <span className="text-green-700">Building </span> things and
              seeing new things come to life with code. I do enjoy{" "}
              <span className="text-green-700">experimenting</span> a lot on new
              tech and tools and i am a huge learner. I am huge on some{" "}
              <span className="text-green-700">stuff</span> : AI, Drone
              Technology, International Politics etc and i feel ML is boring
              LoL.
            </p>
          </section>

          <section id="tools" className="max-w-[60rem] mx-auto mt-8">
            <h1 className="font-bold text-white text-3xl mb-2">Tools</h1>
            <p className="">
              Over the course of my coding Journey i have come across many tools
              and services. My Prim ary Stack includes React on the frontend and
              Nodejs on the backend. I have listed some of the languages/tools i
              use below.
            </p>
            <aside className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-x-2 space-y-2">
              <div className="hover:text-blue-600 cursor-pointer">
                <h3>React</h3>
              </div>
              <div>
                <h3>Node</h3>
              </div>
              <div>
                <h3>PostgreSQL</h3>
              </div>
              <div>
                <h3>Git</h3>
              </div>
            </aside>
            <aside className="w-full border rounded-lg border-zinc-300 p-2 mt-4">
              <p>
                Things i am currently learning on plan to learn in the near
                future
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-x-2 space-y-2 px-2">
                <div className="hover:text-blue-600 cursor-pointer">
                  <h3>React</h3>
                </div>
                <div>
                  <h3>Node</h3>
                </div>
                <div>
                  <h3>PostgreSQL</h3>
                </div>
                <div>
                  <h3>Git</h3>
                </div>
              </div>
            </aside>
          </section>

          <section id="projects" className="max-w-[60rem] mx-auto mt-8">
            <h2 className="font-bold text-white text-3xl mb-2">Projects</h2>
            <p className="flex">
              I like to build things i will use or find interesting. It may be
              stuff i find on the internet or things am genuinly need.Here are a
              couple of them, you can find other one&apos;s on my github.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 ">
              <div className="">
                <Image
                  src={dummyImage}
                  alt="dummy"
                  className="w-full h-60 sm:"
                />
                <h3>Shop Itt</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore, rerum?
                </p>
              </div>
              <div className="">
                <div className="w-full h-60">
                  <Image
                    src={dummyImage}
                    alt="dummy"
                    className="w-full h-full sm:"
                  />
                </div>
                <h3>Shop Itt</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore, rerum?
                </p>
              </div>
            </div>
          </section>
        </main>
      </main>
    </>
  );
}
