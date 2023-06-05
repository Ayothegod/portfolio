import Link from "next/link"


const MobileMenu = ({ open, setOpen }) => {
    return (
        <>
            {/* bruh */}

            <div className={`fixed h-[50vh] top-full right-0 left-0 transition-transform ease-in duration-1000 bg-[rgba(0,0,0,.9)] text-white p-4 border-b border-b-gray-700 ${open && "translate-y-[0vh]"}`}>
                {/* <button onClick={() => setOpen(!open)}>Close</button> */}
                <ul className="flex flex-col items-center justify-center h-full text-purple-600 text-2xl gap-4" onClick={() => setOpen(!open)}>
                    <li className="">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="">
                        <Link href="#tools">Tools</Link>
                    </li>
                    <li className="">
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li className="">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <button className="text-lg text-white bg-purple-600 rounded px-4 py-1 font-semibold">
                        <Link href="/">Resume</Link>
                    </button>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu

// className={`fixed top-0 bottom-0 left-0 w-[60%] transition duration-500 ease-in-out bg-[#fff] md:hidden p-2 border-r border-r-neutral-300 ${
//     openMenu ? " translate-x-[-100%]" : "translate-x-[0%]"}`}
