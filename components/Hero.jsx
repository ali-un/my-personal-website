import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";

const Hero = () => {
  return (
    <>
      <div className="rounded-full border-2 border-primary p-1 max-sm:mb-[-1.5rem]">
        <Image
          src="/images/profile.jpg"
          width={450}
          height={450}
          className="rounded-full max-lg:w-[370px] max-sm:h-[240px] max-sm:w-[240px]"
          alt=""
        />
      </div>
      <div className="flex flex-col max-md:items-center">
        <h1 className="mb-8 text-7xl font-extrabold text-light max-lg:text-6xl max-sm:text-[2.6rem]">
          علی مصطفوی
        </h1>
        <p className="mb-10 text-xl font-medium text-text">
          برنامه نویس و طراح وب
        </p>
        <div className="mb-10 flex gap-3">
          <button className="rounded-2xl bg-primary px-6 py-[0.6rem] font-medium text-light hover:bg-primary_alt">
            <Link href="/projects">نمونه کارها</Link>
          </button>
          <button className="rounded-2xl bg-dark px-6 py-[0.6rem] font-medium text-light hover:bg-dark/60">
            دانلود رزومه
          </button>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default Hero;
