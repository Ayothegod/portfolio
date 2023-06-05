

const MobileMenu = ({open,setOpen}) => {
  return (
    <>
    {/* bruh */}

    <div className={`w-full absolute top-0 transition ease-in-out delay-150 ${open && "translate-x-[0vw] p-4"}`}>
   {/*  <div className={`fixed top-0 bottom-0 left-0 w-[60%] transition duration-500 ease-in-out bg-[#fff] md:hidden p-2 border-r border-r-neutral-300 ${
    open ? " translate-x-[-100%]" : "translate-x-[0%]"}`}> */}
        <button onClick={() => setOpen(!open)}>closejwsjhwsjwjwejkjkwejk</button>
        {/* Mobilemwnu */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas sed unde dicta accusamus expedita est voluptatem sint animi nisi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas sed unde dicta accusamus expedita est voluptatem sint animi nisi.
    </div>
    </>
  )
}

export default MobileMenu

// className={`fixed top-0 bottom-0 left-0 w-[60%] transition duration-500 ease-in-out bg-[#fff] md:hidden p-2 border-r border-r-neutral-300 ${
//     openMenu ? " translate-x-[-100%]" : "translate-x-[0%]"}`}
  