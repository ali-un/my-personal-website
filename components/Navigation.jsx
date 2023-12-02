"use client";
import { navigation } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  return (
    <>
      <nav className="fixed bottom-2 right-2 top-2 w-16 rounded-3xl bg-dark max-lg:hidden">
        <div className="flex h-screen flex-col items-center justify-center gap-y-10">
          {navigation.map((item, index) => {
            const active =
              (path.includes(item.route) && item.route.length > 1) ||
              path === item.route;
            return (
              <Link
                href={item.route}
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

export default Navigation;
