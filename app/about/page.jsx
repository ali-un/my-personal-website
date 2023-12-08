import { about, skills } from "@/constants";
import local_font from "next/font/local";

const adobe = local_font({
  src: "../../public/fonts/adobe_clean.woff2",
  weight: "400",
  display: "swap",
});

const page = () => {
  return (
    <>
      <section className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 max-lg:grid-cols-1">
          <div className="flex h-screen flex-col items-start justify-center gap-y-20 px-2 max-lg:items-center max-md:h-full max-md:py-24">
            <h2 className="text-2xl font-bold text-light">معرفی خودم</h2>
            <p className="text-text">
              سلام. علی مصطفوی هستم در خدمت شما.
              <br />3 سالی هست که به برنامه نویسی و طراحی وب مشغولم و سعی میکنم
              هرروز بهتر بشم.
              <br />
              این سایت برای معرفی مختصری از خودم، نمونه کارام و ... هست؛ با من
              همراه باش :)
            </p>
            <div className="flex flex-col gap-y-4">
              {about.map((item, index) => {
                return (
                  <>
                    <div key={index} className="flex gap-x-3 text-text">
                      {item.icon} {item.content}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex h-screen flex-col items-center justify-center gap-y-20 max-md:h-full max-md:py-14">
            <h2 className="text-2xl font-bold text-light">مهارتهای من</h2>
            <div className="grid grid-cols-3 gap-x-20 gap-y-10 max-md:gap-x-8">
              {skills.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${adobe.className} flex flex-col items-center gap-y-1 text-text`}
                  >
                    {item.icon} {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
