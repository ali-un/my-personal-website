import { socials } from "@/constants";
import Link from "next/link";

const Socials = () => {
  return (
    <div>
      <div className="flex gap-x-6">
        {socials.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href}
              className="text-3xl text-text transition-all hover:text-light"
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
