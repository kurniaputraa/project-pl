import React from "react";

const page = () => {
  return (
    <section id="portofolio" className="min-h-10 bg-white text-black">
      <div className="grid grid-cols-2 mx-20 pt-15 m-h-75">
        <h1 className="text-2xl leading-7 text-black">
          Promoting Inclusive
          <br />
          Economic Growth
        </h1>
        <p className="text-right text-sm text-black/40">
          Acquisitions, financing, and development
          <br />
          of the retail business portfolio.
        </p>
        <p className="text sm text-black/40 pt-15">
          Investing in promising retail brands and
          <br />
          businesses in the consumer, food and beverage, and
          <br />
          lifestyle sectors that have
          <br />a strong market foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-1 pt-15 pb-0.5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative aspect-square overflow-hidden">
          <img
            src="/images/f&b.png"
            alt="Food & Beverage"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-5 lg:p-6">
            <h1 className="font-bold text-base sm:text-sm lg:text-base">
              Food & Beverage
            </h1>

            <p className="mt-3 text-sm leading-5 text-white/70">
              Streamline repetitive processes
              <br className="hidden sm:block" />
              and reduce manual effort
            </p>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden">
          <img
            src="/images/hospitality.png"
            alt="Tourism & Hospitality"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-5 lg:p-6">
            <h1 className="font-bold text-base sm:text-sm lg:text-base">
              Tourism & Hospitality
            </h1>

            <p className="mt-3 text-sm leading-5 text-white/70">
              Transform raw data into
              <br className="hidden sm:block" />
              actionable insights
            </p>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden">
          <img
            src="/images/agricultural.png"
            alt="Agricultural"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-5 lg:p-6">
            <h1 className="font-bold text-base sm:text-sm lg:text-base">
              Agricultural
            </h1>

            <p className="mt-3 text-sm leading-5 text-white/70">
              Get instant outputs and faster
              <br className="hidden sm:block" />
              decision making
            </p>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden">
          <img
            src="/images/spa.png"
            alt="Spa"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-5 lg:p-6">
            <h1 className="font-bold text-base sm:text-sm lg:text-base">Spa</h1>

            <p className="mt-3 text-sm leading-5 text-white/70">
              Connect seamlessly with your
              <br className="hidden sm:block" />
              existing tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
