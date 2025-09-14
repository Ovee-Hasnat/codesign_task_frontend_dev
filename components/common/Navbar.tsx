import React from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

import logo from "../../public/assets/logo.png";
import menuIcon from "../../public/assets/menu_icon.png";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      className="absolute top-0 w-full mt-10 2xl:mt-20"
      aria-label="Main navigation"
    >
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Homepage">
          <Image
            src={logo}
            alt="Company logo"
            width={143}
            height={34}
            className="w-20 2xl:w-32 mix-blend-difference"
            priority
          />
        </Link>

        <div className="flex items-center gap-10">
          <ThemeToggle />

          <button type="button" aria-label="Open menu" className="p-2">
            <Image
              src={menuIcon}
              alt=""
              width={50}
              height={13}
              className="w-10 2xl:w-12 mix-blend-difference"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
