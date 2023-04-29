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


const Header = () => {
  const [open, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-between items-center p-2  ${open ? "h-12 sm:h-12" : "h-20 sm:h-12"}`}
    >

      <div className="flex justify-between items-center w-full">
        <h2 className="font-bold text-2xl sm:text-2xl text-white">Ayo.Web</h2>

        <div>
          <ul
            className="sm:hidden font-medium cursor-pointer text-green-600 flex items-center gap-2"
            onClick={openMenu}
          >
            <MdArrowForwardIos className={!open && "hidden"} />
            <AiOutlineDown className={open && "hidden"} />
            <li>MENU</li>
          </ul>
        </div>
      </div>

      <ul
        className={`flex items-end gap-6  justify-end w-full text-sm  flex-2 m-2 sm:m-0 transition duration-300 ease-in-out ${open ? "-translate-y-40 sm:translate-y-0": "translate-y-0 sm:translate-y-0"}`}
      >
        <li className="text-lg hover:text-green-600 ">
          <Link href="/">/Home</Link>
        </li>
        <li className="text-lg hover:text-green-600">
          <Link href="#tools">/Tools</Link>
        </li>
        <li className="text-lg hover:text-green-600">
          <Link href="#projects">/Projects</Link>
        </li>
        <li className="text-lg hover:text-green-600">
          <Link href="/blog">/Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
