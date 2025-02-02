import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import ContentWrapper from "../common/ContentWrapper";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-12 text-white bg-[var(--black3)]">
      <ContentWrapper className="flex flex-col gap-8 items-center">
        <>
          <ul className="flex  text-gray-200 font-medium text-xs md:text-lg gap-4">
            {footerItem.map((item) => (
              <li
                className="hover:text-[var(--pink)] transition-all duration-300 cursor-pointer font-medium"
                key={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="text-xs text-white/40 md:px-32 text-center max-w-[1000px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div className="flex gap-4 justify-center items-center">
            <Link href={"https://github.com/msxcodes"} target="_blank" className="inline-flex">
              <span className="p-2 md:p-4 rounded-full hover:text-[var(--pink)] bg-[#04152d] cursor-pointer transition-all duration-300 customBorder">
                <FaGithub size={16} className="md:w-5 md:h-5" />
              </span>
            </Link>
            <Link href="https://instagram.com/msxcodes" target="_blank" className="inline-flex">
              <span className="p-2 md:p-4 rounded-full hover:text-[var(--pink)] bg-[#04152d] cursor-pointer transition-all duration-300 customBorder">
                <FaInstagram size={16} className="md:w-5 md:h-5" />
              </span>
            </Link>
            <Link href="https://twitter.com/msxcodes" target="_blank" className="inline-flex">
              <span className="p-2 md:p-4 rounded-full hover:text-[var(--pink)] bg-[#04152d] cursor-pointer transition-all duration-300 customBorder">
                <FaTwitter size={16} className="md:w-5 md:h-5" />
              </span>
            </Link>
            <Link href="https://linkedin.com/in/msxcodes" target="_blank" className="inline-flex">
              <span className="p-2 md:p-4 rounded-full hover:text-[var(--pink)] bg-[#04152d] cursor-pointer transition-all duration-300 customBorder">
                <FaLinkedin size={16} className="md:w-5 md:h-5" />
              </span>
            </Link>
          </div>
        </>
      </ContentWrapper>
    </footer>
  );
}

const footerItem = [
  { name: "Terms of Use", link: "#" },
  { name: "Privacy-Policy", link: "#" },
  { name: "About", link: "#" },
  { name: "Blog", link: "#" },
  { name: "FAQ", link: "#" },
];
