import Link from "next/link";

const ConnectLinks = ({BsLinkedin}) => {
  return (
    <Link href="/">
      <button className="flex items-center gap-2 hover:text-blue-700 text-xl">
        <BsLinkedin /> <p>Linkedin</p>
      </button>
    </Link>
  );
};

export default ConnectLinks;
