"use client";

import { usePathname } from "next/navigation";
import { navigation } from "@/constants";
import Link from "next/link";

const MobileNavigation = () => {
  const path = usePathname();
  return (
    <>
      <nav className="fixed bottom-2 flex h-16 w-screen justify-center lg:hidden">
        <div className="flex items-center justify-center gap-x-5 rounded-3xl bg-dark">
          {navigation.map((item, index) => {
            const active =
              (path.includes(item.route) && item.route.length > 1) ||
              path === item.route;
            return (
              <Link
                href={item.route}
                key={index}
                className={`px-6 text-3xl ${
                  active ? "text-primary" : "text-light"
                }`}
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
