import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-10 max-md:w-[280px]">
          <Image
            src="/images/profile.jpg"
            width={360}
            height={360}
            alt=""
            className="rounded-full"
          />
        </div>
        <h1 className="mb-8 text-[3.5rem] font-extrabold text-light max-md:text-4xl">
          علی مصطفوی
        </h1>
        <p className="mb-6 text-text">
          برنامه نویس <i className="bi bi-dot text-primary"></i> طراح وب{" "}
          <i className="bi bi-dot text-primary"></i> امنیت و شبکه
        </p>
        <div className="mb-8 flex gap-4">
          <Link href="/projects">
            <button className="rounded-2xl bg-light px-5 py-3 font-medium text-background transition-all ease-in hover:scale-105 active:transform">
              نمونه کارها
            </button>
          </Link>
          <button className="rounded-2xl bg-gray px-6 py-3 font-medium text-light transition-all ease-in hover:scale-95 active:transform">
            دانلود رزومه
          </button>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default Introduction;
