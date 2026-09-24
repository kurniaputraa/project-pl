import Navbar from "@/components/navbar";

const images = [
  "/images/Logo1.png",
  "/images/Logo2.png",
  "/images/Logo3.png",
  "/images/Logo4.png",
  "/images/Logo5.png",
  "/images/Logo6.png",
];

const Home = () => {
  return (
    <div className="text-white">
      <section
        id="home"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/home.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="relative flex min-h-screen items-end px-6 pb-12 md:px-8 md:pb-10">
          <div className="w-full">
            <h1 className="text-3xl font-light leading-[1.05] lg:text-5xl md:text-4xl sm:text-3xl">
              BUILDING SOUTHEAST
              <br />
              ASIA'S NEXT-GEN
              <br />
              RETAIL ECOSYSTEM
            </h1>

            <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end">
              <p className="max-w-lg text-xs leading-5 text-white/80 md:text-sm sm:text:md lg:text-lg">
                Transforming everyday consumer brands through
                <br />
                intelligent systems and strategic holding execution.
              </p>

              <div className="flex gap-5 lg:ml-auto">
                <a
                  href="#getstarted"
                  className="border border-white px-5 py-2.5 text-xs hover:bg-white hover:text-black"
                >
                  GET STARTED →
                </a>

                <a
                  href="#requestdemo"
                  className="bg-white px-5 py-2.5 text-xs text-black hover:bg-white/80"
                >
                  REQUEST DEMO →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-black">
        <h1 className="text-center font-mono">Companies We've Invested In</h1>

        <div className="mx-5 grid grid-cols-2 align-items-center justify-items-center gap-2 pt-12 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Logo ${index + 1}`}
              className="h-auto max-h-6 w-auto max-w-25 object-contain"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
