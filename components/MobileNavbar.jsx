"use client";
import { navbar } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const [show, close] = useState(false);
  const path = usePathname();
  return (
    <>
      <nav className="md:hidden">
        <button onClick={() => close(!show)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f2f3f5"
            viewBox="0 0 16 16"
            width={30}
            hanging={30}
          >
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
        <div
          className={`${
            show ? "flex" : "hidden"
          } absolute left-0 top-16 flex h-[50vh] w-screen flex-col items-center justify-center gap-y-14 bg-dark`}
        >
          {navbar.map((item, index) => {
            const active =
              (path.includes(item.route) && item.route.length > 1) ||
              path === item.route;
            return (
              <Link
                href={item.route}
                key={index}
                className={`${
                  active ? "bg-primary" : ""
                } rounded-2xl px-6 py-2 text-xl font-semibold text-light`}
                onClick={() => close(!show)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
