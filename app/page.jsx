import Hero from "@/components/Hero";

const page = () => {
  return (
    <>
      <section className="flex h-screen items-center justify-center gap-14 max-md:h-full max-md:flex-col max-md:py-20">
        <Hero />
      </section>
    </>
  );
};

export default page;
