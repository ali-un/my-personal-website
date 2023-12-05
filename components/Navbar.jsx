"use client";
import { navbar } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const path = usePathname();
  return (
    <>
      <nav className="fixed bottom-0 left-0 top-0 flex h-16 w-screen items-center justify-between border-b px-4">
        <Link href="/" className="text-3xl font-bold text-primary">
          ع مـ
        </Link>
        <div className="flex gap-x-6 max-md:hidden">
          {navbar.map((item, index) => {
            const active =
              (path.includes(item.route) && item.route.length > 1) ||
              path === item.route;
            return (
              <Link
                href={item.route}
                key={index}
                className={`rounded-2xl px-4 py-2 font-medium text-light transition-all ${
                  active ? "bg-primary hover:text-light" : "hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <MobileNavbar />
      </nav>
    </>
  );
};

export default Navbar;
