import AboutMe from "@/components/AboutMe";
import Introduction from "@/components/Introduction";

const page = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 xl:h-screen">
          <div className="flex items-center justify-center max-xl:pt-24 xl:pt-10">
            <Introduction />
          </div>
          <div className="flex items-center justify-center text-center max-xl:pt-24 xl:pt-10 max-lg:pb-28 max-lg:text-right">
            <AboutMe />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
