import Image from "next/image"
import Link from "next/link"
import dummyImage from "@/assets/Screenshot (155).png";

const Project = () => {
  return (
    <section id="projects" className="max-w-[60rem] mx-auto mt-8 pb-4 ">
            <h2 className="font-bold text-white text-2xl mb-2">Projects</h2>
            <p className="">
              I like to build things i will use or find interesting. It may be
              stuff i find on the internet or things am genuinly need.Here are a
              couple of them, you can find other one&apos;s on my github.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className="flex flex-col sm:flex-row gap-y-2 gap-x-4 sm:items-center">
                <div className="h-48 sm:h-60 rounded-lg overflow-hidden ">
                  <Image
                    src={dummyImage}
                    alt="dummy"
                    className="w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-white text-lg sm:text-2xl leading-none">
                    Shop Itt
                  </h3>
                  <p className="sm:mt-2">
                    An Ecommerce app with a cms (Sanity Cms) with checkout
                    available
                  </p>
                  <div className="flex justify-between items-center sm:mt-2 ">
                    <button className=" text-neutral-300 flex text-xs sm:text-sm md:text-lg bg-neutral-800 px-2 py-1 rounded-sm ">
                      <Link href="/">Visit Website </Link>
                    </button>
                    <button className=" text-neutral-300 flex text-xs sm:text-sm md:text-lg  bg-neutral-800 px-2 py-1 rounded-sm ">
                      <Link href="/">Visit Github</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Project