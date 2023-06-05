import Image from "next/image"
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa"

const Project = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      <div className="my-2 md:w-92">

        <div className="h-48 sm:h-42 w-full md:h-60 rounded overflow-hidden border border-neutral-900">
          <Image src={data.image} alt={data.name} className="w-full h-full hover:scale-110 transition-transform  duration-300 ease-in-out object-cover object-center"/>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-purple-600 text-lg sm:text-2xl leading-none font-russo">{data.name}</h3>
          <p className="text-[14px]"> {data.desc} </p>

          <div className="flex items-center gap-2">
          {
            data?.tools.map((tool,ind) => (
              <button key={ind} className="bg-neutral-800 mt-1 text-[10px] p-[2px] rounded-sm">{tool}</button>
            ))
          }
        </div>

          <div className="flex justify-between items-center mt-2">
            <button className="flex text-sm bg-white text-black font-medium px-2 py-1 rounded-sm hover:bg-gray-600 hover:text-gray-100">
              <Link href={`https://${data.projectlink}`} className="flex items-center gap-1">Website <FaTelegramPlane /> </Link>
            </button>
            <button className="flex text-sm bg-white text-black font-medium px-2 py-1 rounded-sm hover:bg-gray-600 hover:text-gray-100">
              <Link href={`https://${data.github}`} className="flex items-center gap-2"  >
                Github<AiFillGithub />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project