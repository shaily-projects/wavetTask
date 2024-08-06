"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Cart, DropDown, HumbergerIcon } from "@/assets/icon";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuToggle = () => {
    document.body.classList.toggle("menu-open");
    setMobileMenu(!mobileMenu);
  };
  return (
    <header className="flex items-center w-full  md:px-8 px-4 border-b">
      <div className="flex items-center justify-between py-4 w-full">
        <Link href="/">
          <h3 className="text-3xl font-bold">LOGO</h3>
        </Link>
        <nav
          className={`xl:gap-[20px] gap-[8px] list-none lg:flex  ${
            mobileMenu
              ? "fixed top-[68px] left-0 bg-white w-[80%] h-full py-4 mobileMenu"
              : "hidden"
          }`}
        >
          <li>
            <Link
              href="#!"
              className="flex items-center text-[#777777] font-bold  xl:gap-2 gap-1"
            >
              Demos <DropDown />
            </Link>
          </li>
          <li>
            <Link
              href="#!"
              className="flex items-center text-[#777777] font-bold xl:gap-2 gap-1"
            >
              Features <DropDown />
            </Link>
          </li>
          <li>
            <Link
              href="#!"
              className="flex items-center text-[#777777] font-bold  xl:gap-2 gap-1"
            >
              More <DropDown />
            </Link>
          </li>
          <li>
            <Link
              href="#!"
              className="flex items-center text-[#777777]  font-bold xl:gap-2 gap-1"
            >
              Shop <DropDown />
            </Link>
          </li>
          <li className="md:hidden block">
            <div className="flex items-center text-[#777777]  font-bold xl:gap-2 gap-1">
              <Link href={"#!"}>Login</Link>
            </div>
          </li>
        </nav>
        <div className="flex items-center xl:gap-2 gap-1">
          <div className="flex items-center text-[#777777] font-semibold uppercase xl:gap-2 gap-1">
            <Link href={"#!"} className="md:block hidden">
              Login
            </Link>
            <span className="text-borderColor uppercase md:block hidden">
              {" "}
              |{" "}
            </span>
            <span className="md:block hidden"> Cart / $0,00</span>
          </div>
          <Link href={"#!"}>
            <Cart />
          </Link>
          <button
            type="button"
            className="lg:hidden block"
            onClick={menuToggle}
          >
            <HumbergerIcon />
          </button>{" "}
        </div>
      </div>
    </header>
  );
}
