"use client";

import Navbar from "@/components/navbar";
import { easeOut, motion } from "motion/react";

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
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-light leading-[1.05] lg:text-5xl md:text-4xl sm:text-3xl"
            >
              BUILDING SOUTHEAST
              <br />
              ASIA'S NEXT-GEN
              <br />
              RETAIL ECOSYSTEM
            </motion.h1>

            <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="max-w-lg text-xs leading-5 text-white/80 md:text-sm sm:text:md lg:text-lg"
              >
                Transforming everyday consumer brands through
                <br />
                intelligent systems and strategic holding execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex gap-5 lg:ml-auto"
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-black">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center font-mono"
        >
          Companies We've Invested In
        </motion.h1>

        <motion.div className="mx-10 grid grid-cols-2 align-items-center justify-items-center gap-2 pt-12 sm:grid-cols-3 lg:grid-cols-6 ">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.3 }}
            >
              <img
                src={image}
                alt={`Logo ${index + 1}`}
                className="max-h-6 w-auto max-w-25 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
