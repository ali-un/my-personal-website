import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-10 max-md:w-[300px]">
          <Image
            src="/images/profile.jpg"
            width={350}
            height={350}
            alt=""
            className="border rounded-3xl border-primary p-1 shadow-md shadow-primary"
          />
        </div>
        <h1 className="mb-8 text-[3.5rem] font-extrabold text-light max-md:text-4xl">
          علی مصطفوی
        </h1>
        <p className="mb-6 text-text">
          برنامه نویس <i className="bi bi-dot text-primary"></i> طراح وب{" "}
          <i className="bi bi-dot text-primary"></i> امنیت و شبکه
        </p>
        <div className="mb-8 flex gap-3">
          <Link href="/projects">
            <button className="rounded-2xl bg-primary px-6 py-3 font-medium text-light hover:bg-primary_alt">
              نمونه کارها
            </button>
          </Link>
          <button className="rounded-2xl bg-secondary px-6 py-3 font-medium text-light hover:bg-dark">
            دانلود رزومه
          </button>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default Introduction;
