import ScrollReveal from "@/components/scroll-reveal";

const page = () => {
  return (
    <section id="contact" className="bg-[#1d1d1d]">
      <div className="text-center">
        <ScrollReveal>
          <h1 className="text-3xl font-light md:text-4xl">
            Start Building with
            <br />
            Smarter System
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="m-5 text-sm text-white/60 md:text-base">
            Take the next step toward
            <br />
            intelligent workflows.
          </p>
        </ScrollReveal>
      </div>
      <div className="flex gap-5 lg:ml-auto items-center justify-center">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 p-8 md:p-10 lg:p-15">
        <div className="flex text-left gap-10 sm:gap-12 lg:gap-20">
          <ul className="space-y-3">
            <li>Product</li>
            <li>Solutions</li>
            <li>Company</li>
            <li>Resources</li>
            <li>Legal</li>
          </ul>
          <ul className="space-y-3">
            <li>Twitter/X</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="text-left grid justify-start sm:justify-end mt-8 sm:mt-0">
          <ul className="space-y-3 ">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
          <div className="md:-m-5 pt-5">
            <h1 className="uppercase leading-5 font-bold">
              vireya
              <br />
              capital
              <br />
              partners
            </h1>
          </div>
        </div>
      </div>
      <footer className="flex justify-center mt-8 px-6 pb-6 sm:justify-end sm:-mt-8 sm:me-8 sm:px-0 sm:pb-0 lg:me-12">
        <p className="text-center text-xs md:text-right text-white/60 transition-colors duration-300 hover:text-white">
          &copy; 2027 Vireya Capital Partners. All Rights Reserved
        </p>
      </footer>
    </section>
  );
};

export default page;
