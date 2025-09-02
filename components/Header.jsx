import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mohamed <span className="text-accent">Hasmath.</span>
          </h1>
        </Link>

        {/* Desktop Nav & Hire Me button*/}
        <div className="hidden xl:flex items-center gap-8">
          {" "}
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  );
  Header;
};

export default Header;
