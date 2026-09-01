import Link from "next/link";

const Navbar = () => (
  <nav className="mb-10 flex items-center justify-between px-2 font-medium text-muted-foreground text-sm">
    <p className="">Est. 2004</p>
    <ul className="flex items-center justify-between gap-4 font-medium font-mono">
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

export default Navbar;
