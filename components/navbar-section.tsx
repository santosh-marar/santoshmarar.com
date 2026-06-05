import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-2 flex items-center justify-between font-medium text-muted-foreground text-sm mb-10">
      <p className="">Est. 2004</p>
      <ul className="font-mono font-medium flex items-center justify-between gap-4">
        <li className="hover:text-primary">
          <Link href="#">/Home</Link>{" "}
        </li>
        <li className="hover:text-primary">
          {" "}
          <Link href="#">/Skills</Link>
        </li>
        <li className="hover:text-primary">
          {" "}
          <Link href="#">/Experince</Link>
        </li>
        <li className="hover:text-primary">
          {" "}
          <Link href="#">/Projects</Link>
        </li>
        <li className="hover:text-primary">
          {" "}
          <Link href="#">/Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
