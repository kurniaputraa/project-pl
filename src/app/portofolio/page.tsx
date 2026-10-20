"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";
import ScrollReveal from "@/components/scroll-reveal";

const portfolios = [
  {
    image: "/images/f&b.png",
    title: "Food & Beverage",
    description: "Streamline repetitive processes and reduce manual effort",
  },
  {
    image: "/images/hospitality.png",
    title: "Tourism & Hospitality",
    description: "Transform raw data into actionable insights",
  },
  {
    image: "/images/agricultural.png",
    title: "Agricultural",
    description: "Get instant outputs and faster decision making",
  },
  {
    image: "/images/spa.png",
    title: "Spa",
    description: "Connect seamlessly with your existing tools",
  },
];

const page = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev < portfolios.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <section id="portofolio" className="min-h-10 bg-white text-black">
      <div className="mx-20 grid grid-cols-2 pt-15 m-h-75">
        <ScrollReveal direction="left">
          <h1 className="text-2xl leading-7 text-black">
            Promoting Inclusive
            <br />
            Economic Growth
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <p className="text-right text-sm text-black/40">
            Acquisitions, financing, and development
            <br />
            of the retail business portfolio.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <p className="text sm pt-15 text-black/40">
            Investing in promising retail brands and
            <br />
            businesses in the consumer, food and beverage, and
            <br />
            lifestyle sectors that have
            <br />a strong market foundation.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative block pt-15 pb-5 sm:hidden">
        <div className="relative mx-auto aspect-square w-[85vw] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative h-full w-full"
            >
              <img
                src={portfolios[current].image}
                alt={portfolios[current].title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h1 className="text-base font-bold">
                  {portfolios[current].title}
                </h1>

                <p className="mt-3 text-sm leading-5 text-white/70">
                  {portfolios[current].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {current > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-3xl text-white"
            >
              <Icon icon={"mdi:chevron-left-circle"}></Icon>
            </button>
          )}

          {current < portfolios.length - 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-3xl text-white"
            >
              <Icon icon={"mdi:chevron-right-circle"}></Icon>
            </button>
          )}
        </div>

        {/* INDICATOR */}
        <p className="mt-3 text-center text-sm text-black/50">
          {current + 1} / {portfolios.length}
        </p>
      </div>

      <div className="hidden gap-1 pt-15 pb-0.5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {portfolios.map((portfolio, index) => (
          <motion.div
            key={portfolio.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square overflow-hidden"
          >
            <img
              src={portfolio.image}
              alt={portfolio.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-5 lg:p-6">
              <h1 className="text-base font-bold sm:text-sm lg:text-base">
                {portfolio.title}
              </h1>

              <p className="mt-3 text-sm leading-5 text-white/70">
                {portfolio.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default page;
