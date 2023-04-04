import React from "react";
import { VscMenu } from "react-icons/vsc";
import MobileNav from "./MobileNav";
import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  function handleNav() {
    setMobileNav(!mobileNav);
  }

  return (
    <header className="flex justify-between items-center z-10 lg:justify-start">
      <h1 className="font-bold text-[2rem] mx-4">snap</h1>
      <button onClick={handleNav} className="text-[2rem] mx-4 lg:hidden">
        <VscMenu />
      </button>
      <MobileNav
        className={
          mobileNav
            ? "fixed h-full w-[66%] top-0 right-0 shadow-2xl bg-AlmostWhite flex flex-col overflow-hidden z-10 origin-right duration-300"
            : "fixed h-full w-0 top-0 right-0 shadow-2xl bg-AlmostWhite flex flex-col overflow-hidden z-10 origin-right duration-300 lg:hidden"
        }
        handleNav={handleNav}
      />

      <Nav />
    </header>
  );
};

export default Header;
