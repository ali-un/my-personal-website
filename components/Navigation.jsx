"use client";
import { nav } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const path = usePathname();
  return (
    <>
      <nav className="fixed flex h-16 w-screen items-center justify-between bg-background px-4">
        {/* Logo */}
        <Link
          href="/"
          className="rounded-2xl rounded-ee-none bg-primary px-4 py-1 text-xl font-extrabold text-background"
        >
          علی مصطفوی
        </Link>
        {/* Nav content */}
        <div className="flex items-center gap-x-4 max-lg:hidden">
          {nav.map((item, index) => {
            const active =
              (path.includes(item.route) && item.route.length > 1) ||
              path === item.route;
            return (
              <Link
                href={item.route}
                key={index}
                className={`rounded-2xl px-5 py-2 font-medium text-light transition-all ${
                  active ? "bg-primary hover:text-light" : "hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <MobileNav />
      </nav>
    </>
  );
};

export default Navigation;
