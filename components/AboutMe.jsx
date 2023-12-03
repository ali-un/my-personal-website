import { my_info, my_skills } from "@/constants";

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
          <div className="flex flex-col gap-y-4 text-right">
            <h2 className="mb-12 text-center text-2xl font-bold text-light">
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
          <div className="flex flex-col max-md:pt-24" dir="ltr">
            <div className="flex flex-col">
              <h2 className="mb-12 text-center text-2xl font-bold text-light">
                مهارتهای من
              </h2>
              <div className="grid grid-cols-3 gap-8">
                {my_skills.map((item, index) => {
                  return (
                    <div className="flex justify-center">
                      <div
                        key={index}
                        className="flex flex-col items-center gap-y-2"
                      >
                        <i>{item.icon}</i>
                        <p className="text-sm text-text">{item.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
