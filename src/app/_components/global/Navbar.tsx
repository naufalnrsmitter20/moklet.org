"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HamburgerIcon from "../icons/HamburgerIcon";
import { useState } from "react";

interface NavOption {
  title: string;
  href: string;
}

const navOptions: NavOption[] = [
  { title: "Beranda", href: "/" },
  { title: "Berita", href: "/berita" },
  { title: "Sub-organ", href: "/sub-organ" },
  { title: "Tentang", href: "/tentang" },
  { title: "Developer", href: "/developer" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="xl:relative fixed z-[999] mx-auto w-full flex flex-col">
      <div className="w-full flex xl:max-w-[1192px] z-[999] py-4 xl:py-0 px-5 bg-white xl:bg-transparent justify-between">
        <Link href={"/"} className="block xl:mt-8">
          <Image
            src={"/horizontal.svg"}
            alt="Logo moklet.org"
            width={120}
            height={50}
            className="pointer-events-none h-[50px] w-[130px]"
          />
        </Link>
        <div className="fixed hidden left-1/2 top-[24.5px] xl:flex w-full max-w-[602px] -translate-x-1/2 justify-between rounded-full border border-neutral-300 bg-white px-[50px] py-3">
          {navOptions.map((navOption) => (
            <Link
              key={navOption.title}
              href={navOption.href}
              // Splitted "/a/b" will form an array: ["", "a", "b"], that's why we use the second index as comparation
              className={`rounded-full py-2 text-center transition-all duration-300 hover:text-primary-400 ${pathname.split("/")[1] === navOption.href.split("/")[1] ? "text-red-400" : ""}`}
            >
              {navOption.title}
            </Link>
          ))}
        </div>
        <button
          className="block xl:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <HamburgerIcon />
        </button>
      </div>
      <div
        className={`block xl:hidden h-[300px] w-full z-[800] bg-white transition-all duration-500 ${isExpanded ? "translate-y-0" : " -translate-y-96"}`}
      >
        <div className="flex flex-col gap-8 text-start justify-start items-start my-[21px] ms-[20px] lg:ms-[52px]">
          {navOptions.map((navOption) => (
            <Link
              key={navOption.title}
              href={navOption.href}
              // Splitted "/a/b" will form an array: ["", "a", "b"], that's why we use the second index as comparation
              className={`rounded-full text-center text-[16px] transition-all duration-300 hover:text-primary-400 ${pathname.split("/")[1] === navOption.href.split("/")[1] ? "text-red-400" : ""}`}
            >
              {navOption.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
