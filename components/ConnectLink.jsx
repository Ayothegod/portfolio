import Link from "next/link";


const ConnectLink = ({icons}) => {
    console.log(icons);
  return (
    <Link href="/">
      <button className="flex items-center gap-2 hover:text-blue-700">
        {icons.map((icon,idx) => (
            <icon key={idx}/>
        ))}
         <p>Linkedin</p>
      </button>
    </Link>
  );
};

export default ConnectLink;
