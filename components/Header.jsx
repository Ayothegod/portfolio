import NodeIcon from "@/assets/icons8-node-js.svg";
import gitpng from "@/assets/icons8-github-30.png";
import gitsvg from "@/assets/icons8-github.svg";
import gitsvg1 from "@/assets/icons8-github (1).svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-black flex justify-between items-center p-2">
      <Image src={gitsvg1} alt="NodeIcon" className="w-10 fill-red-500 " />
      <ul className="flex space-x-6">
        <li className="text-md hover:text-green-700 ">
          <Link href="/">/Home</Link>
        </li>
        <li className="text-md hover:text-green-700">
          <Link href="#projects">/Tools</Link>
        </li>
        <li className="text-md hover:text-green-700">
          <Link href="#tools">/Projects</Link>
        </li>
        <li className="text-md hover:text-green-700">
          <Link href='/blog'>/Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
//assets\icons8-github (1).svg
