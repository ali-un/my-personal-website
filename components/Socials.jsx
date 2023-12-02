import { socials } from "@/constants";
import Link from "next/link";

const Socials = () => {
  return (
    <div>
      <div className="flex gap-x-6">
        {socials.map((item) => {
          return (
            <Link
              href={item.href}
              className="text-text hover:text-primary text-[1.60rem] transition-all"
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
