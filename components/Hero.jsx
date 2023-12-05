import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Hero = () => {
  return (
    <>
      {/* Image */}
      <div className="max-lg:mb-8">
        <Image
          src="/images/profile.jpg"
          width={400}
          height={400}
          className="rounded-3xl max-lg:w-[250px] max-sm:w-[200px]"
          alt=""
        />
      </div>
      {/* Content */}
      <div className="flex flex-col max-lg:items-center max-lg:text-center lg:w-5/12">
        <h1 className="mb-12 text-6xl font-extrabold text-light max-md:text-5xl max-sm:text-4xl">
          علی مصطفوی
        </h1>
        <p className="mb-8 px-2 text-text">
          سلام. علی مصطفوی هستم در خدمت شما. معرفی کوچیکی از خودم، فعالیت هام و
          ... میکنم. <br /> یه برنامه نویس معمولی! حدود چند سالی هست که به
          برنامه نویسی و طراحی وب مشغولم و تلاش میکنم هرروز بهتر بشم.
          <br />
        </p>
        {/* Buttons */}
        <div className="mb-8 flex items-center gap-3 max-lg:justify-center max-md:flex-col">
          <button className="rounded-2xl bg-primary px-6 py-3 font-medium text-light transition-all hover:bg-primary_alt active:scale-110">
            <Link href="/projects">نمونه کارها</Link>
          </button>
          <button className="rounded-2xl bg-dark px-6 py-3 font-medium text-light hover:bg-gray active:scale-110">
            دانلود رزومه
          </button>
        </div>
        {/* Socials */}
        <Socials />
      </div>
    </>
  );
};

export default Hero;
