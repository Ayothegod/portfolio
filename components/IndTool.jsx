import {FaReact,FaNodeJs,FaRust} from "react-icons/fa"
import {DiNodejs} from "react-icons/di"
import {SiTypescript,SiFirebase,SiSupabase,SiMongodb,SiChakraui,SiPrisma,SiGraphql,SiPostgresql,SiTailwindcss, } from "react-icons/si"
import {BsGit} from "react-icons/bs"
import {TbBrandGolang,TbBrandTypescript} from "react-icons/tb"

//HiMailOpen,HiMail,

const IndTool = () => {
  return (
    <>
      <div className=" flex items-center hover:text-blue-600 gap-1 cursor-pointer">
        <FaReact className=" text-lg"/>
        <h3 className="font-medium">React</h3>
      </div>
      <div className=" flex items-center hover:text-green-600 gap-1 cursor-pointer">
        <FaNodeJs className=" text-lg"/>
        <h3 className="font-medium">Nodejs</h3>
      </div>
      <div className=" flex items-center hover:text-green-600 gap-1 cursor-pointer">
        <FaNodeJs className=" text-lg"/>
        <h3 className="font-medium">Nodejs</h3>
      </div>
      
    </>
  );
};

export default IndTool;
