"use client";
import { navbar } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MobileNavbar = () => {
  const [show, close] = useState(false);
  const path = usePathname();
  return (
    <>
      <nav className="md:hidden">
        <button onClick={() => close(!show)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
              stroke="#f2f3f5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 15.5H2"
              stroke="#f2f3f5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.56 8.5L12 11.06L9.44 8.5"
              stroke="#f2f3f5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          className={`${
            show ? "flex" : "hidden"
          } absolute left-0 top-0 flex h-[60vh] w-screen flex-col items-center justify-center gap-y-14 bg-dark transition-all`}
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
          <button onClick={() => close(!show)}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16998 14.83L14.83 9.17004"
                stroke="#f2f3f5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.83 14.83L9.16998 9.17004"
                stroke="#f2f3f5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#f2f3f5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
