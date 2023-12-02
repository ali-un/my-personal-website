import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

export const socials = [
  {
    icon: <i className="bi bi-github" />,
    href: "",
  },
  {
    icon: <i className="bi bi-instagram" />,
    href: "",
  },
  {
    icon: <i className="bi bi-twitter-x" />,
    href: "",
  },
  {
    icon: <i className="bi bi-telegram" />,
    href: "",
  },
];

export const my_info = [
  {
    icon: <i className="bi bi-person-fill" />,
    content: "علی مصطفوی",
  },
  {
    icon: <i className="bi bi-calendar2-event-fill" />,
    content: "متولد 26 مرداد 1383",
  },
  {
    icon: <i className="bi bi-geo-alt-fill" />,
    content: "زنجان، شهرک نصر، خ فجر 3، ق 106",
  },
  {
    icon: <i className="bi bi-telephone-fill" />,
    content: "09375240441",
  },
  {
    icon: <i className="bi bi-envelope-at-fill" />,
    content: (
      <Link href="" className="text-primary">
        ali.mostaafavi@gmail.com
      </Link>
    ),
  },
  {
    icon: <i className="bi bi-mortarboard-fill" />,
    content: "دانشجوی رشته مهندسی برق - دانشگاه زنجان",
  },
];

export const my_skills = [
  {
    icon: "/svgs/Rust.svg",
    name: "Rust",
  },
  {
    icon: "/svgs/Node.js.svg",
    name: "Node.js",
  },
  {
    icon: "/svgs/Next.js.svg",
    name: "Next.js",
  },
  {
    icon: "/svgs/React.svg",
    name: "React",
  },
  {
    icon: "/svgs/Redux.svg",
    name: "Redux",
  },
  {
    icon: "/svgs/JavaScript.svg",
    name: "JavaScript",
  },
  {
    icon: "/svgs/TypeScript.svg",
    name: "TypeScript",
  },
  {
    icon: "/svgs/TailwindCSS.svg",
    name: "TailwindCSS",
  },
  {
    icon: "/svgs/Bun.svg",
    name: "Bun",
  },
];
