import { socials } from "@/constants";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex gap-x-4">
      {socials.map((item, index) => {
        return (
          <Link href={item.href} key={index}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
