import { services } from "@/constants";

const page = () => {
  return (
    <>
      <section className="container mx-auto max-w-6xl">
        <div className="flex h-screen items-center justify-center px-3 max-md:h-full max-md:pb-8 max-md:pt-24">
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center gap-y-8 rounded-3xl border-2 border-primary p-3"
                >
                  <h1 className="text-2xl font-bold text-light">{item.name}</h1>
                  <p className="text-text">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
