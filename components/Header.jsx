import NodeIcon from "@/assets/icons8-node-js.svg"
import gitpng from "@/assets/icons8-github-30.png"
import gitsvg from "@/assets/icons8-github.svg"
import gitsvg1 from "@/assets/icons8-github (1).svg"
import Image from "next/image"

const Header = () => {
  return (
    <div className="text-white bg-black ">
        <p>This is the header, lets build the nav, the time is</p>
        {/* <NodeIcon/> */}
        <Image src={NodeIcon} alt="NodeIcon" className=""/>
        <div className="text-black bg-black  ">

        <Image src={gitpng} alt="NodeIcon" className="  "/>
        </div>
        <Image src={gitsvg1} alt="NodeIcon" className=""/>
    </div>
  )
}

export default Header
//assets\icons8-github (1).svg