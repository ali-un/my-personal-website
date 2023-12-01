import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-10 max-md:w-[250px]">
          <Image
            src="/images/profile.jpg"
            width={350}
            height={350}
            alt=""
            className="rounded-md"
          />
        </div>
        <h1 className="text-light mb-8 text-[3.5rem] font-extrabold max-md:text-4xl">
          علی مصطفوی
        </h1>
        <p className="text-text mb-6">برنامه نویس - طراح وب - امنیت و شبکه</p>
        <div className="mb-8 flex gap-3">
          <Link href="/projects">
            <button className="bg-primary hover:bg-primary_alt text-light rounded-2xl px-6 py-3 font-medium">
              نمونه کارها
            </button>
          </Link>
          <button className="bg-secondary text-light hover:bg-dark rounded-2xl px-6 py-3 font-medium">
            دانلود رزومه
          </button>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default Introduction;
