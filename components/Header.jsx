import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import MobileMenu from "./MobileMenu";


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-between items-center p-2 `}
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="font-bold text-2xl sm:text-2xl text-white">Ayomide.</h2>

        <div>
          <button className="text-white text-3xl sm:hidden" onClick={() => setOpen(!open)}>
            <BiMenuAltRight/>
          </button>
        </div>
      </div>
        {
          open && 
          <MobileMenu open={open} setOpen={setOpen} />
        }

      <ul
        className={`hidden sm:flex sm:items-end gap-6  justify-end w-full text-sm  flex-2 m-2 sm:m-0 transition duration-300 ease-in-out`}
      >
        <li className="text-lg hover:text-green-600 ">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg hover:text-green-600">
          <Link href="#tools">Tools</Link>
        </li>
        <li className="text-lg hover:text-green-600">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="text-lg hover:text-green-600">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
