import AboutMe from "@/components/AboutMe";
import Introduction from "@/components/Introduction";

const page = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="grid h-screen grid-cols-2 max-lg:grid-cols-1">
          <div className="flex h-full items-center justify-center max-lg:py-4">
            <Introduction />
          </div>
          <div className="flex items-center justify-center text-center max-lg:pb-24 max-lg:pt-24 max-lg:text-right">
            <AboutMe />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
