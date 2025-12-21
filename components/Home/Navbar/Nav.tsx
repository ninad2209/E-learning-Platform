"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
  openAuth: () => void;
};

const Nav = ({ openNav, openAuth }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed ${navBg ? "bg-indigo-800" : ""} w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Image src="/images/logo.png" alt="Logo" width={100} height={70} />

        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="nav__link cursor-pointer">{link.label}</p>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={openAuth}
            className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-800 transition-all duration-200 rounded-lg"
          >
            Signup Now
          </button>
        </div>

        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
