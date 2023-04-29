import Image from "next/image"
import Link from "next/link"
import {AiFillGithub} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"

const Project = ({name,desc,image,projectlink,github,first}) => {
  return (
   
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 max-w-[50rem] mx-auto">

              <div className={`${first ? "flex flex-col sm:flex-row gap-y-4 gap-x-8 sm:items-center" : " flex flex-col sm:flex-row-reverse gap-y-4 gap-x-8 sm:items-center" }`}>


                <div className="h-48 w-full sm:w-1/2 sm:h-60 md:h-72 rounded-lg overflow-hidden border border-neutral-800">

                  <Image
                    src={image}
                    alt="dummy"
                    className="w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out object-cover object-center"
                    />
                </div>

                <div className="flex flex-col gap-2 w-full sm:w-1/2">
                  <h3 className="font-semibold text-white text-lg sm:text-2xl leading-none">
                    {name}
                  </h3>
                  <p className="sm:mt-2">
                    {desc}
                  </p>
                  <div className="flex justify-between items-center sm:mt-2 ">
                    <button className=" hover:text-neutral-300 flex text-sm md:text-lg hover:bg-neutral-800 bg-white text-black font-medium px-4 py-2 rounded-md ">
                      <Link href={`https://${projectlink}`} className="flex items-center gap-2">Website <FaTelegramPlane/> </Link>
                    </button>
                    <button className=" text-neutral-300 flex text-sm md:text-lg  bg-neutral-800 hover:bg-white hover:text-black font-medium px-4 py-2 rounded-md ">
                      <Link href={`https://${github}`} className="flex items-center gap-2"  >
                        Github<AiFillGithub/>
                        </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Project