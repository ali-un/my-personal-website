import { navbar } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed bottom-0 left-0 top-0 flex h-16 w-screen items-center justify-between px-3">
        <Link href="/">
          <Image src="/svgs/logo.svg" width={40} height={40} alt="" />
        </Link>
        <div className="flex gap-x-6">
          {navbar.map((item, index) => {
            return (
              <Link
                href={item.route}
                key={index}
                className="font-medium text-light hover:text-primary"
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

export default Navbar;
