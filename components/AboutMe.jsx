import { my_info, my_skills, my_skills_2 } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <div className="p-3">
        <div className="mb-20">
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
          <div className="flex flex-col gap-y-4 rounded-2xl text-right">
            <h2 className="mb-8 text-2xl font-bold text-light max-md:text-center">
              درباره من
            </h2>
            {my_info.map((item, index) => {
              return (
                <p key={index} className="flex gap-x-2 text-text">
                  {item.icon}
                  {item.content}
                </p>
              );
            })}
          </div>
          <div className="flex h-[25rem] flex-col max-md:pt-24" dir="ltr">
            <h2 className="mb-12 text-2xl font-bold text-light max-md:text-center">
              مهارتهای من
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {my_skills.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-x-2"
                  >
                    <i className="">{item.icon}</i>
                    <p className="text-sm text-text">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
