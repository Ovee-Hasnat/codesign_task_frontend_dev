import React from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

import logo from "../../public/assets/logo.png";
import menuIcon from "../../public/assets/menu_icon.png";

function Navbar() {
  return (
    <nav className="absolute top-0 w-full mt-20">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <Image
          src={logo}
          alt="logo"
          width={143}
          height={34}
          className="mix-blend-difference"
        />
        <span className="flex items-center gap-10">
          <ThemeToggle />
          <Image
            src={menuIcon}
            alt="logo"
            width={50}
            height={13}
            className="mix-blend-difference"
          />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
