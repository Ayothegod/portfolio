import NodeIcon from "@/assets/icons8-node-js.svg";
import gitpng from "@/assets/icons8-github-30.png";
import gitsvg from "@/assets/icons8-github.svg";
import gitsvg1 from "@/assets/icons8-github (1).svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {AiOutlineDown} from "react-icons/ai"
import {IoIosArrowForward} from "react-icons/io"
import {MdArrowForwardIos} from "react-icons/md"

const Header = () => {
  const [open, setOpen] = useState(true);
  const openMenu = () => {
    setOpen(!open);         
  };

  return (
    <div className=" flex flex-col sm:flex-row sm:justify-between items-center p-2">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-bold text-2xl sm:text-2xl text-white">Ayo.Web</h2>
        <div>
          <ul className="sm:hidden font-medium cursor-pointer text-green-600 flex items-center gap-2" onClick={openMenu}>
            <MdArrowForwardIos className={!open && "hidden"}/>
            <AiOutlineDown className={open && "hidden"}/>
            <li>MENU</li>
          </ul>
        </div>
      </div>
      <ul className={open ? "hidden sm:flex sm:gap-8" : "flex justify-end w-full text-sm items-end gap-6 m-2 sm:m-0 "}>
        <li className="text-md hover:text-green-600 ">
          <Link href="/">/Home</Link>
        </li>
        <li className="text-md hover:text-green-600">
          <Link href="#tools">/Tools</Link>
        </li>
        <li className="text-md hover:text-green-600">
          <Link href="#projects">/Projects</Link>
        </li>
        <li className="text-md hover:text-green-600">
          <Link href="/blog">/Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
