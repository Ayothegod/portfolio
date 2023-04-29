import Image from "next/image"
import Link from "next/link"
import {AiFillGithub} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"

const Project = ({name,desc,image,link}) => {
  return (
   
            <div className=" grid grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className="flex flex-col sm:flex-row gap-y-2 gap-x-4 sm:items-center">
                <div className="h-48 w-full md:w-1/2 sm:h-60 md:h-72 rounded-lg overflow-hidden border border-neutral-800">
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
                    <button className=" text-neutral-300 flex text-sm md:text-lg bg-neutral-800 px-2 py-1 rounded-md ">
                      <Link href={`https://${link}`} className="flex items-center gap-2">Website <FaTelegramPlane/> </Link>
                    </button>
                    <button className=" text-neutral-300 flex text-sm md:text-lg  bg-neutral-800 px-2 py-1 rounded-md ">
                      <Link href="/" className="flex items-center gap-2"  >
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