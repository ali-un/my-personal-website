import AboutMe from "@/components/AboutMe";
import Introduction from "@/components/Introduction";

const page = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="flex h-full items-center justify-center max-md:pt-4">
            <Introduction />
          </div>
          <div className="flex h-screen items-center justify-center">
            <AboutMe />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
