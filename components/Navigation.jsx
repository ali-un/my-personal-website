"use client";
import { navigation } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  return (
    <>
      <nav className="fixed bottom-2 right-2 top-2 flex h-screen items-center justify-center max-lg:hidden">
        <div className="flex h-52 w-16 flex-col items-center justify-center gap-y-8 rounded-3xl bg-dark">
          {navigation.map((item, index) => {
            const active =
              (path.includes(item.route) && item.route.length > 1) ||
              path === item.route;
            return (
              <Link
                key={index}
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
