import Link from "next/link";
const Header = () => (
  <nav className="h-10 w-10 rounded-full">
    <Link href={"/"}>
      <a>List</a>
    </Link>
    <Link href={"/:id"}>
      <a>Details</a>
    </Link>
  </nav>
);

export default Header;
