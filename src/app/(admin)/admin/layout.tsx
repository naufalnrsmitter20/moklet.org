"use client";
import { Sidebar } from "./components/Sidebar";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  const [nav, setNav] = useState(false);
  const pathname = usePathname().split("/");
  pathname.shift();
  return (
    <main className="flex w-full h-screen overflow-hidden bg-slate-50">
      <Sidebar nav={nav} session={session} />
      <div
        className={`bg-gray-900 opacity-50 ${
          nav ? "" : "hidden"
        } fixed inset-0 z-10 `}
        id="sidebarBackdrop"
      />
      <div
        id="main-content"
        className="relative h-full w-full overflow-y-auto ps-2 lg:ps-24 py-4 lg:ml-64 "
      >
        <nav className="w-max rounded-lg align-middle p-2 font-sans text-2xl capitalize md:p-3">
          <ol className="flex ">
            <li>
              <Link href="/" className="font-semibold ">
                home
              </Link>
            </li>
            {pathname.map((path, i) => {
              const last = i + 1 == pathname.length;
              return (
                <React.Fragment key={i}>
                  <li className="px-3">
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1377 25.4L19.2877 17.25C20.2502 16.2875 20.2502 14.7125 19.2877 13.75L11.1377 5.59998"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </li>
                  <li>
                    <Link
                      className="font-semibold"
                      href={"/" + pathname.slice(0, i + 1).join("/")}
                      key={i}
                    >
                      {path.replace(/-/g, " ").trim()}
                    </Link>
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
        <main>
          <div className="px-4 pt-6 ">{children}</div>
        </main>
      </div>
    </main>
  );
}
