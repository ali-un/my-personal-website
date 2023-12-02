"use client";

import { usePathname } from "next/navigation";
import { navigation } from "@/constants";
import Link from "next/link";

const MobileNavigation = () => {
  const path = usePathname();
  return (
    <>
      <nav className="fixed bottom-2 flex w-screen items-center justify-center lg:hidden">
        <div className="flex justify-center w-52 h-16 rounded-3xl items-center gap-x-7 bg-dark">
          {navigation.map((item, index) => {
            const active =
              (path.includes(item.route) && item.route.length > 1) ||
              path === item.route;
            return (
              <Link
                href={item.route}
                key={index}
                className={`text-3xl ${active ? "text-primary" : "text-light"}`}
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;
