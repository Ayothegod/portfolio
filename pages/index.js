import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Project from "@/components/Project";
import IndTool from "@/components/IndTool";
import Footer from "@/components/Footer";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaGithubSquare, } from "react-icons/fa";
import aboutImage from "@/assets/20230330_24542.jpg";
import data from "@/lib/projectData";


export default function Home() {
  return (
    <>
      <main className="bg-black text-gray-300 py-1">

        <nav className="sticky top-0 border-b border-b-neutral-800  backdrop-blur-lg ">
          <section className="max-w-[50rem] mx-auto ">
            <Header />
          </section>
        </nav>

        <main className="px-4 max-w-[50rem] mx-auto">
          <section className=" mt-4">
            <div className="w-24 md:w-32 rounded-lg overflow-hidden">
              <Image src={aboutImage} alt="aboutImage" className="h-full w-full" />
            </div>

            <h1 className="font-medium font-russo text-purple-600 text-5xl md:text-6xl mb-2 mt-8 text-center">
              Ayomide Adebisi
            </h1>
            {/* orbitron is so alien and beautiful */}
            <p className=" font-josefin">
              I&apos;m a{" "}
              <span className="">software developer with focus on frontend</span>. I
              enjoy building new stuff. I do enjoy experimenting a lot on new
              tech and tools and i am a huge learner. I also spend time on AI, Drone
              Technology, International Politics and i feel Machine Learning is quite boring but exciting.
            </p>
          </section>

          <section id="tools" className=" mt-8">
            <h1 className="font-bold font-orbitron text-white text-2xl mb-2 ">Tools</h1>
            <p className="">
              Over the course of my coding Journey i have come across many  tools and services. my go-to stack involves;
            </p>
            <aside className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-x-2 gap-y-4 ">
              <IndTool />
            </aside>
            {/* <aside className="w-full border rounded-lg border-neutral-500 py-4 px-2 mt-4">
              <div className="flex items-center gap-2">
                <MdArrowForward className="h-5 w-5" />
                <p>
                  Things i plan to learn in the near future.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-x-2 gap-y-4 px-2">
                <FutureTools />
              </div>
            </aside> */}
          </section>

          <section
            id="projects"
            className="max-w-[60rem] mx-auto mt-8 pb-4 border-b border-b-neutral-900"
          >
            <h2 className="font-bold font-orbitron text-white text-2xl mb-2 ">Projects</h2>
            <p className="">
              Tools and stuff i have built, you can find other one&apos;s on my <Link href="https://github.com/Ayothegod" className="text-purple-600 underline">github</Link>
            </p>

            <div className="flex items-center justify-center">
              <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {
              data.map(data => (
                <Project key={data.name} data={data}/>
              ))
            }
              </div>
            </div>
          </section>

          <section className=" mt-4 pb-4 ">
            <h2 className="text-white font-medium text-3xl text-center font-orbitron">Connect</h2>
            <div className="flex gap-2 items-center justify-center">
              <p>contact forms are not your thing? i get you</p>
              <Link href="mailto:heyayomideadebisi@gmail.com?subject=hey Ayomide">
                <button className="flex items-center underline gap-2 text-purple-600 ">email
                </button>
              </Link>
            </div>

            <div className="my-2 w-full sm:w-2/3 md:w-2/3 mx-auto px-8 ">
              <div className="flex items-center justify-center flex-col gap-4">
                <input type="text" placeholder="name" className="outline-none bg-transparent border-b border-b-gray-700 w-full placeholder:text-gray-600" />
                <input type="text" placeholder="email" className="outline-none bg-transparent border-b border-b-gray-700 w-full placeholder:text-gray-600" />
                <input type="text" placeholder="message" className="outline-none bg-transparent border-b border-b-gray-700 w-full placeholder:text-gray-600" />
                <button className="text-purple-600 font-josefin font-bold text-2xl">submit</button>
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-around mt-4 text-3xl">
                <Link href="https://linkedin.com/in/aiiomide">
                  <button className="flex items-center gap-2 text-blue-300"> <BsLinkedin />
                  </button>
                </Link>
                <Link href="https://twitter.com/aiiomide">
                  <button className="flex items-center gap-2 text-blue-400 "> <FaTwitterSquare />
                  </button>
                </Link>
                <Link href="https://github.com/Ayothegod">
                  <button className="flex items-center gap-2 text-neutral-100 "><FaGithubSquare />
                  </button>
                </Link>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </main>
    </>
  );
}
