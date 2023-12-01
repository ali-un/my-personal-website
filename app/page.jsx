import AboutMe from "@/components/AboutMe";
import Introduction from "@/components/Introduction";

const page = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="grid h-screen grid-cols-2 max-md:grid-cols-1">
          <div className="flex h-full items-center justify-center max-md:pt-4">
            <Introduction />
          </div>
          <div className="flex items-center justify-center max-md:pt-44">
            <AboutMe />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
