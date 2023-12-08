import { socials } from "@/constants";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex gap-x-6">
      {socials.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={index}
            className="transition-all hover:scale-110"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
