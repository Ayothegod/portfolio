import Link from "next/link"
import {
    FaTwitterSquare,
    FaInstagramSquare,
    FaGithubSquare,
  } from "react-icons/fa";
  import { BsLinkedin } from "react-icons/bs";
//   import resume from "@/assets/ayomide-resume.pdf"
import resume from "../public/ayomide-resume.pdf"

const MobileMenu = ({ open, setOpen }) => {
    console.log("resume");
    return (
        <>

            <div className={`fixed h-[50vh] top-full right-0 left-0 transition-transform ease-in duration-1000 bg-[rgba(0,0,0,.9)] text-white p-4 border-b border-b-gray-700 ${open && "translate-y-[0vh]"}`}>
                {/* <button onClick={() => setOpen(!open)}>Close</button> */}
                <ul className="flex flex-col items-center justify-center h-full text-2xl font-medium gap-3 font-orbitron" onClick={() => setOpen(!open)}>
                    <li className="hover:text-purple-600">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-purple-600">
                        <Link href="#tools">Tools</Link>
                    </li>
                    <li className="hover:text-purple-600">
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li className="hover:text-purple-600 ">
                        <Link href="/blog">Blog</Link>
                    </li>
                    {/* <a href={resume} target="_blank">Resume</a> */}

                    <button className="text-lg text-white bg-purple-600 rounded px-4 py-1 font-semibold font-josefin">
                        <Link href={resume} download>Resume</Link>
                    </button>

                <div className="flex items-center justify-center gap-8 w-full mt-4 text-lg">
                <Link href="https://linkedin.com/in/aiiomide">
                  <button className=" text-blue-300"> <BsLinkedin />
                  </button>
                </Link>
                <Link href="https://twitter.com/aiiomide">
                  <button className=" text-blue-400 "> <FaTwitterSquare />
                  </button>
                </Link>
                <Link href="https://github.com/Ayothegod">
                  <button className=" text-neutral-100 "><FaGithubSquare />
                  </button>
                </Link>
              </div>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu

// className={`fixed top-0 bottom-0 left-0 w-[60%] transition duration-500 ease-in-out bg-[#fff] md:hidden p-2 border-r border-r-neutral-300 ${
//     openMenu ? " translate-x-[-100%]" : "translate-x-[0%]"}`}
