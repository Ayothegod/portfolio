import Image from "next/image"
import Link from "next/link"


// assets\20220526_055846.jpg , assets\20220519_195303.jpg

const Project = ({name,desc,image}) => {
  return (
   
            <div className=" grid grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className="flex flex-col sm:flex-row gap-y-2 gap-x-4 sm:items-center">
                <div className="h-48 w-full sm:w-1/2 sm:h-52 md:h-72 rounded-lg overflow-hidden ">
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
                    <button className=" text-neutral-300 flex text-sm md:text-lg bg-neutral-800 px-2 py-1 rounded-sm ">
                      <Link href="/">Visit Website </Link>
                    </button>
                    <button className=" text-neutral-300 flex text-sm md:text-lg  bg-neutral-800 px-2 py-1 rounded-sm ">
                      <Link href="/">Visit Github</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Project