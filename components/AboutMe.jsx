import { my_info, my_skills } from "@/constants";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className="">
        <h2 className="mb-8 text-2xl font-bold text-light">درباره من</h2>
        <div className="mb-12">
          <p className="text-right text-text">
            سلام!
            <br />
            علی مصطفوی هستم مخلص شما. یه برنامه نویس ساده که چند سالی میشه تو
            این حوزه فعالیت دارم و از همون اول عاشقش شدم.
            <br />
            تلاش میکنم که بتونم هرروز بیشتر یاد بگیرم و هرروز بهتر بشم.
            <br />
            بیشتر تو حوزه وب فعالیت میکنم هم بک اند و هم فرانت اند. کم و بیش تو
            ی امنیت شبکه ام کار میکنم و تو راه یادگیریش هستم.
            <br />
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          <div className="flex h-[25rem] flex-col justify-center gap-y-4 rounded-2xl p-2 text-right">
            {my_info.map((item) => {
              return (
                <p className="flex gap-x-1 text-text">
                  {item.icon}
                  {item.content}
                </p>
              );
            })}
          </div>
          <div className="flex h-[25rem]  justify-center rounded-3xl bg-dark p-2 text-right">
            <p>مهرتهای من:</p>
            {my_skills.map((tech) => {
              return (
                <Image src={tech.icon} width={40} priority height={40} alt="" />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
