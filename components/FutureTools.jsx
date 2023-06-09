import {FaReact,FaRust} from "react-icons/fa"
import {SiTypescript,SiSupabase, SiGraphql } from "react-icons/si"
import {TbBrandGolang} from "react-icons/tb"

const FutureTools = () => {
  return (
    <>
      <div className=" flex items-center hover:text-[#2F74C0] gap-1 cursor-pointer">
        <SiTypescript className=" text-lg"/>
        <h3 className="font-medium">Typescript</h3>
      </div>
      <div className=" flex items-center hover:text-[#5ED3F3] gap-1 cursor-pointer">
        <FaReact className=" text-lg"/>
        <h3 className="font-medium">React Native</h3>
      </div>
      <div className=" flex items-center hover:text-[#DE33A6] gap-1 cursor-pointer">
        <SiGraphql className=" text-lg"/>
        <h3 className="font-medium">Graphql</h3>
      </div>
      <div className=" flex items-center hover:text-[#000000] gap-1 cursor-pointer">
        <FaRust className=" text-lg"/>
        <h3 className="font-medium">Rust</h3>
      </div>
      <div className=" flex items-center hover:text-[#3CC88C] gap-1 cursor-pointer">
        <SiSupabase className=" text-lg"/>
        <h3 className="font-medium">Supabase</h3>
      </div>
      {/* <div className=" flex items-center hover:text-[#00A7D0] gap-1 cursor-pointer">
        <TbBrandGolang className=" text-lg"/>
        <h3 className="font-medium">Golang</h3>
      </div> */}
    </>
  );
};

export default FutureTools;
