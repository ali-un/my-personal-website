const AboutMe = () => {
  return (
    <>
      <div className="">
        <h2 className="text-light text-2xl font-bold mb-8">درباره من</h2>
        <div className="mb-12">
          <p className="text-text">
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
          <div className="bg-dark flex h-[25rem] items-center justify-center rounded-2xl">
            2
          </div>
          <div className="bg-dark flex h-[25rem] items-center justify-center rounded-3xl">
            2
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
