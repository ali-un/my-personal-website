import Hero from "@/components/Hero";

const page = () => {
  return (
    <main className="container mx-auto">
      <section className="flex h-screen items-center justify-center gap-x-28 max-lg:flex-col max-lg:py-24 max-md:h-full">
        <Hero />
      </section>
    </main>
  );
};

export default page;
