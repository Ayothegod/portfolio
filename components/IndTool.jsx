import {FaReact,FaNodeJs,FaRust} from "react-icons/fa"
import {DiNodejs} from "react-icons/di"
import {SiTypescript,SiFirebase,SiSupabase,SiMongodb,SiChakraui,SiPrisma,SiGraphql,SiPostgresql,SiTailwindcss, } from "react-icons/si"
import {BsGit} from "react-icons/bs"
import {TbBrandGolang,TbBrandTypescript} from "react-icons/tb"


const IndTool = () => {
  return (
    <>
      <div className=" flex items-center hover:text-[#5ED3F3] gap-1 cursor-pointer">
        <FaReact className=" text-lg"/>
        <h3 className="font-medium">React</h3>
      </div>
      <div className=" flex items-center hover:text-[#87B83C] gap-1 cursor-pointer">
        <FaNodeJs className=" text-lg"/>
        <h3 className="font-medium">Nodejs</h3>
      </div>
      <div className=" flex items-center hover:text-[#E94E31] gap-1 cursor-pointer">
        <BsGit className=" text-lg"/>
        <h3 className="font-medium">Git</h3>
      </div>
      <div className=" flex items-center hover:text-[#07B0CE] gap-1 cursor-pointer">
        <SiTailwindcss className=" text-lg"/>
        <h3 className="font-medium">TailwindCSS</h3>
      </div>
      <div className=" flex items-center hover:text-neutral-700 gap-1 cursor-pointer">
        <SiPrisma className=" text-lg"/>
        <h3 className="font-medium">Prisma</h3>
      </div>
      <div className=" flex items-center hover:text-[#31648C] gap-1 cursor-pointer">
        <SiPostgresql className=" text-lg"/>
        <h3 className="font-medium">PostgreSQL</h3>
      </div>
      {/* <div className=" flex items-center hover:text-[#118D4D] gap-1 cursor-pointer">
        <SiMongodb className=" text-lg"/>
        <h3 className="font-medium">MongoDB</h3>
      </div> */}
      {/* <div className=" flex items-center hover:text-[#29B9AD] gap-1 cursor-pointer">
        <SiChakraui className=" text-lg"/>
        <h3 className="font-medium">ChakraUI</h3>
      </div> */}
      <div className=" flex items-center hover:text-[#F7C62D] gap-1 cursor-pointer">
        <SiFirebase className=" text-lg"/>
        <h3 className="font-medium">Firebase</h3>
      </div>
      
    </>
  );
};

export default IndTool;
