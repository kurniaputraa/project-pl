import React from "react";

const page = () => {
  return (
    <section id="about" className="bg-[#1d1d1d] text-white pt-15 pb-10">
      <div className="grid grid-cols-2 border border-white/20 mx-12 p-5 font-sans min-h-75">
        <h1 className="text-2xl leading-6 font-bold">
          VIREYA
          <br />
          CAPITAL
          <br />
          PARTNERS
        </h1>

        <p className="text-right text-md text-white/70">
          Proprietary Investment Holding Company
        </p>

        <p className="leading-7 col-start-2 me-3 mt-15 max-w-sm font-semibold justify-self-end text-left text-md lg:text-2xl md:text-xl sm:text-lg text-white/70">
          An Indonesia-based proprietary investment holding company and
          tech-enabled private retail fund.
        </p>
      </div>

      <div className="w-full pt-5">
        <img
          src="/images/about.png"
          alt="About Images"
          className="block h-auto w-full"
        />
      </div>

      <div className="flex min-h-35 justify-end p-10">
        <p className="max-w-sm text-xs leading-4 sm:text-sm md:text-md lg:text-lg text-white/70">
          A strategic partner that transforms conventional
          <br />
          retail businesses into efficient, measurable, and
          <br />
          sustainably profitable entities.
        </p>
      </div>
    </section>
  );
};

export default page;
