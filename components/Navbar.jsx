import { navigation } from "@/constants";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <nav className="fixed left-0 right-0 top-0  bg-gray py-4">
        <section className="container mx-auto px-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-light">
              ع
            </Link>
            <div className="flex gap-x-6 max-md:hidden">
              {navigation.map((item, index) => {
                return (
                  <Link
                    href={item.route}
                    className="font-medium text-light"
                    key={index}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <MobileNav />
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
