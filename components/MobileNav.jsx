"use client";
import { nav } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileNav = () => {
  const [show, close] = useState(false);
  const path = usePathname();
  return (
    <>
      <nav className="lg:hidden">
        <button onClick={() => close(!show)} className="left-4 flex">
          <svg
            className={`${show ? "hidden" : "flex"}`}
            viewBox="0 0 24 24"
            fill="none"
            width={30}
            height={30}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
              stroke="#f2f3f5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.96997 2V22"
              stroke="#f2f3f5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.97 9.43994L12.41 11.9999L14.97 14.5599"
              stroke="#f2f3f5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className={`${show ? "flex" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            width={30}
            height={30}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9902 10.0099L14.8302 9.16992"
              stroke="#5865f2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.16992 14.8301L11.9199 12.0801"
              stroke="#5865f2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.8299 14.8299L9.16992 9.16992"
              stroke="#5865f2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12.96V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
              stroke="#5865f2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          className={`fixed right-0 top-0 flex h-screen w-64 items-center justify-center bg-dark ${
            show ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-y-14 text-center">
            {nav.map((item, index) => {
              const active =
                (path.includes(item.route) && item.route.length > 1) ||
                path === item.route;
              return (
                <Link
                  onClick={() => close(!show)}
                  href={item.route}
                  key={index}
                  className={`rounded-2xl px-10 py-2 text-[1.30rem] font-medium text-light transition-all ${
                    active
                      ? "bg-primary hover:text-light"
                      : "hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
