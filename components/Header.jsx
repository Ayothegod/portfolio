import NodeIcon from "@/assets/icons8-node-js.svg";
import gitpng from "@/assets/icons8-github-30.png";
import gitsvg from "@/assets/icons8-github.svg";
import gitsvg1 from "@/assets/icons8-github (1).svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" flex justify-between items-center p-2">
      <div className="">
        <h2 className="font-bold text-lg sm:text-2xl text-white">Ayo.Web</h2>
      </div>
      <ul className="flex space-x-6">
        <li className="text-md hover:text-green-700 ">
          <Link href="/">/Home</Link>
        </li>
        <li className="text-md hover:text-green-700">
          <Link href="#tools">/Tools</Link>
        </li>
        <li className="text-md hover:text-green-700">
          <Link href="#projects">/Projects</Link>
        </li>
        <li className="text-md hover:text-green-700">
          <Link href="/blog">/Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
//assets\icons8-github (1).svg
