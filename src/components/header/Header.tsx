"use client";
import React, { useState } from "react";
import ContentWrapper from "../common/ContentWrapper";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import Logo from "../../../public/media.png";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import SerachBar from "../common/SerachBar";
import Link from "next/link";

function Header() {
  const [menuIcon, setMenuIcon] = useState<boolean>(false);
  const handleMenuIcon = () => setMenuIcon(!menuIcon);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header
      className={`w-full h-[60px] z-10 flex items-center fixed transition-all duration-300 ${
        menuIcon
          ? "bg-[var(--black3)]"
          : "bg-[rgba(0,0,0,0.25)] backdrop-blur-sm"
      }`}
    >
      <ContentWrapper className="flex justify-between items-center w-full ">
        <>
          <Link href={"/"} className="flex items-center gap-1">
            <Image src={Logo} alt="logo" className="size-9" />
            <span className="cursor-pointer bg-gradient-to-tr  from-blue-500 to-purple-500 font-[900] text-2xl md:text-3xl bg-clip-text text-transparent">
              MaxMovie
            </span>
          </Link>
          <ul className="text-white md:flex gap-6 hidden items-center text-md font-medium ">
            {/* <Link href={"/explore/movie"}>
              <li className="hover:text-[var(--pink)] cursor-pointer transition-all duration-300">
                Movies
              </li>
            </Link>
            <Link href={"/explore/tv"}>
              <li className="hover:text-[var(--pink)] cursor-pointer transition-all duration-300">
                TV Shows
              </li>
            </Link> */}

            {/* <li onClick={() => setShowSearch(!showSearch)}>
              <IoMdSearch size={19} />
            </li> */}
          </ul>

          {/* Mobile Menu Nav  */}
          <ul className="flex md:hidden text-white gap-4 items-center">
            {/* <li onClick={() => setShowSearch(!showSearch)}>
              <IoMdSearch size={19} />
            </li> */}
            {menuIcon ? (
              <li className="cursor-pointer" onClick={handleMenuIcon}>
                <IoClose size={19} />
              </li>
            ) : (
              <li className="cursor-pointer" onClick={handleMenuIcon}>
                <BiMenu size={19} />
              </li>
            )}
          </ul>
        </>
      </ContentWrapper>
      <nav
        className={
          menuIcon
            ? "animate-menu-slide absolute top-[50px] bg-[var(--black3)] w-screen h-[100px]"
            : "hidden"
        }
      >
        <ul className="text-white gap-4 text-md p-6 px-4 font-medium flex flex-col ">
          <Link href={"#"}>
            <li className="hover:text-[var(--pink)] cursor-pointer transition-all duration-300">
              Movies
            </li>
          </Link>
          <Link href={"#"}>
            <li className="hover:text-[var(--pink)] cursor-pointer transition-all duration-300">
              TV Shows
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
