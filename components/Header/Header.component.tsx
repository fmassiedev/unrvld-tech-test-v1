import Link from "next/link";
import MenuToggle from "./MenuToggle.component";
import SearchBar from "./Searchbar.component";
import NavIcons from "./NavIcons.comonent";

const Header = () => {
  return (
    <header className="container mx-auto p-4 flex justify-between align-middle">
      <div className="md:flex flex-1 items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl tracking-wide">LOGO</div>
          </Link>
          <ul className="hidden md:flex gap-4">
            <li>
              <Link href="/products">Shop</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex w-2/3 xl:w-1/2 items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
      <MenuToggle />
    </header>
  );
};

export default Header;
