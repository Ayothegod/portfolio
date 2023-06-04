import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Project from "@/components/Project";
import IndTool from "@/components/IndTool";
import Footer from "@/components/Footer";
import { BsLinkedin } from "react-icons/bs";
import { MdArrowForward, MdOutlineWavingHand } from "react-icons/md";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import aboutImage from "@/assets/20230330_24542.jpg";
import wavingHand from "@/assets/icons8-waving-hand-emoji-48.png";

import FutureTools from "@/components/FutureTools";
import noteApp from "@/assets/Screenshot (187).png";
import netflixClone from "@/assets/Screenshot (191).png";
import amazonClone from "@/assets/Screenshot (193).png";
import miniGallery from "@/assets/Screenshot (195).png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayomide Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black text-gray-300 py-1">

        <nav className="sticky top-0 border-b border-b-neutral-800  backdrop-blur-lg ">
          <section className="max-w-[60rem] mx-auto ">
            <Header />
          </section>
        </nav>

        <main className="px-4">

          <section className="max-w-[60rem] mx-auto mt-4">
            <div className="w-24 md:w-48 rounded-lg overflow-hidden">
              <Image src={aboutImage} alt="aboutImage" className="h-full w-full" />
            </div>

            <h1 className="font-bold text-white text-2xl mb-2 mt-8 flex gap-2">
              Hi, I&apos;m Ayomide Adebisi<MdOutlineWavingHand className="text-green-600 animate-bounce w-10 h-10" />
            </h1>

            <p className="">
              I&apos;m a{" "}
              <span className="text-purple-700">software developer</span>. I
              enjoy building new stuff. I do enjoy experimentinga lot on new
              tech and tools and i am a huge learner. I also spend time on AI, Drone
              Technology, International Politics and i feel ML is boring
              lol.
            </p>
          </section>

          <section id="tools" className="max-w-[60rem] mx-auto mt-8">
            <h1 className="font-bold text-white text-2xl mb-2 ">Tools</h1>
            <p className="">
              Over the course of my coding Journey i have come across many  tools and services. my go-to stack involves;
            </p>
            <aside className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-x-2 gap-y-4 ">
              <IndTool />
            </aside>
            <aside className="w-full border rounded-lg border-neutral-500 py-4 px-2 mt-4">
              <div className="flex items-center gap-2">
                <MdArrowForward className="h-5 w-5" />
                <p>
                  Things i plan to learn in the near future.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-x-2 gap-y-4 px-2">
                <FutureTools />
              </div>
            </aside>
          </section>

          <section
            id="projects"
            className="max-w-[60rem] mx-auto mt-8 pb-4 border-b border-b-neutral-900"
          >
            <h2 className="font-bold text-white text-2xl mb-2 ">Projects</h2>
            <p className="">
              I like to build things i will use or find interesting. It may be
              stuff i find on the internet or things am genuinly need.Here are a
              couple of them, you can find other one&apos;s on my github.
            </p>
            <div className="flex flex-col gap-6 mt-4">
              <Project
                name="Note App"
                desc="Create, update and delete notes. local storage to save created notes."
                image={noteApp}
                first={true}
                projectlink="note-app-ruddy.vercel.app/"
                github="github.com/Ayothegod/note-tut"
              />
              <Project
                name="Netflix Clone"
                desc="A simple amazon clone, with firebase for sign-in. include preview movie, save favourite, delete favourite, sign-out and more."
                image={netflixClone}
                first={false}
                projectlink="fullstack-netflix-theta.vercel.app"
                github="github.com/Ayothegod/fullstack-netflix"
              />
              <Project
                name="Simple Amazon Clone"
                desc="A simple Amazon e-commerce app, using react and include cart."
                image={amazonClone}
                first={true}
                projectlink="2022-amazon-clone.vercel.app"
                github="github.com/Ayothegod/2022-amazonClone"
              />
            </div>
          </section>

          <section className="max-w-[60rem] mx-auto mt-4 pb-4 text-center">
            <h2 className="text-white font-medium text-3xl ">Connect</h2>
            <p>get in touch below</p>
            <div className="my-2">
              <input type="text" />
            </div>
            <div className="">
              <div className="flex items-center justify-around mt-4 text-3xl">
                <Link href="https://linkedin.com/in/aiiomide">
                  <button className="flex items-center gap-2 text-blue-700"> <BsLinkedin />
                  </button>
                </Link>
                <Link href="https://twitter.com/aiiomide">
                  <button className="flex items-center gap-2 text-blue-400 "> <FaTwitterSquare />
                  </button>
                </Link>
                <Link href="https://mail.google.com/mail/?view=cm&source=mailto&to=heyayomideadebisi@gmail.com">
                  <button className="flex items-center gap-2 text-neutral-100 "><FaGithubSquare />
                  </button>
                </Link>
                {/* <Link href="/">
                  <button className="flex items-center gap-2 hover:text-red-500 ">
                    <FaInstagramSquare /> <p>Instagram</p>
                  </button>
                </Link> */}
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </main>
    </>
  );
}
