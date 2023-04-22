import {FaReact,FaNodeJs,FaRust} from "react-icons/fa"
import {DiNodejs} from "react-icons/di"
import {SiTypescript,SiFirebase,SiSupabase,SiMongodb,SiChakraui,SiPrisma,SiGraphql,SiPostgresql,SiTailwindcss, } from "react-icons/si"
import {BsGit} from "react-icons/bs"
import {TbBrandGolang,TbBrandTypescript} from "react-icons/tb"


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
        <BsGit className=" text-lg"/>
        <h3 className="font-medium">Git</h3>
      </div>
      <div className=" flex items-center hover:text-green-600 gap-1 cursor-pointer">
        <SiTailwindcss className=" text-lg"/>
        <h3 className="font-medium">TailwindCSS</h3>
      </div>
      <div className=" flex items-center hover:text-green-600 gap-1 cursor-pointer">
        <SiPrisma className=" text-lg"/>
        <h3 className="font-medium">SiPrisma</h3>
      </div>
      <div className=" flex items-center hover:text-green-600 gap-1 cursor-pointer">
        <SiPostgresql className=" text-lg"/>
        <h3 className="font-medium">PostgreSQL</h3>
      </div>
      <div className=" flex items-center hover:text-green-600 gap-1 cursor-pointer">
        <SiMongodb className=" text-lg"/>
        <h3 className="font-medium">MongoDB</h3>
      </div>
      <div className=" flex items-center hover:text-green-600 gap-1 cursor-pointer">
        <SiChakraui className=" text-lg"/>
        <h3 className="font-medium">ChakraUI</h3>
      </div>
      <div className=" flex items-center hover:text-green-600 gap-1 cursor-pointer">
        <SiFirebase className=" text-lg"/>
        <h3 className="font-medium">Firebase</h3>
      </div>
      
    </>
  );
};

export default IndTool;
