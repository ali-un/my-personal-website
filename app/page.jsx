import Socials from "@/components/Socials";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="flex h-screen items-center justify-center gap-14 max-md:h-full max-md:flex-col max-md:py-20">
        <div className="rounded-full border-2 border-primary">
          <Image
            src="/images/profile.jpg"
            width={450}
            height={0}
            className="rounded-full max-lg:w-[370px] max-sm:w-[200px]"
            alt=""
          />
        </div>
        <div className="flex flex-col max-md:items-center">
          <h1 className="mb-8 text-7xl font-extrabold text-light max-lg:text-6xl max-sm:text-5xl">
            علی مصطفوی
          </h1>
          <p className="mb-10 text-2xl font-medium text-text">
            برنامه نویس و طراح وب
          </p>
          <div className="mb-10 flex gap-3">
            <button className="rounded-2xl bg-primary px-6 py-3 font-medium text-light hover:bg-primary_alt">
              <Link href="/projects">نمونه کارها</Link>
            </button>
            <button className="rounded-2xl bg-dark px-6 py-3 font-medium text-light hover:bg-dark/60">
              دانلود رزومه
            </button>
          </div>
          <Socials />
        </div>
      </section>
    </>
  );
};

export default page;
