import Hero from "@/components/Hero";

const page = () => {
  return (
    <main className="container mx-auto">
      <section className="flex h-screen items-center justify-center gap-x-28 py-24 max-lg:h-full max-lg:flex-col">
        <Hero />
      </section>
    </main>
  );
};

export default page;
