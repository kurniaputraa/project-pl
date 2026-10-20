"use client";
import ScrollReveal from "@/components/scroll-reveal";
import { easeOut, motion } from "motion/react";

const page = () => {
  return (
    <section id="proccess" className="bg-[#1d1d1d] p-15">
      <div className="grid grid-cols-2 justify-end pb-10">
        <ScrollReveal>
          <h1 className="font-bold text-2xl text-white">
            From Input to Insight
          </h1>
        </ScrollReveal>
        <p className="text-xs pt-2 text-right text-white/70">
          A simple proccess with powerfull
          <br />
          outcomes
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="border border-white/20 pt-10 pb-10"
      >
        <h1 className="text-center justify-center text-xs sm:text-sm md:text-lg lg:text-2xl text-white">
          Explain teh Workfow in a clear and structured way so
          <br />
          users understand how your system fits into their daily operations.
        </h1>
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-8 pt-15">
          <div className="relative">
            <div className="absolute left-0 right-0 top-2 h-px bg-white/40" />
            <div className="grid grid-cols-3">
              <div>
                <div className="relative z-10 h-4 w-4 rounded-full border-2 border-green-500 bg-[#1d1d1d]" />
                <div className="mt-5">
                  <p className="text-[clamp(9px,1.1vw,14px)] leading-tight text-white/80">
                    Connect your data,
                    <br />
                    tools, or inputs
                  </p>

                  <div className="mt-4 flex items-center">
                    <div className="h-px w-[clamp(40px,7vw,100px)] bg-white" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="relative z-10 h-4 w-4 rounded-full border-2 border-white/60 bg-[#1d1d1d]" />

                <div className="mt-5">
                  <p className="text-[clamp(9px,1.1vw,14px)] leading-tight text-white/80">
                    Process and analyze
                    <br />
                    using AI models
                  </p>

                  <div className="mt-4 flex items-center">
                    <div className="h-px w-[clamp(40px,7vw,100px)] bg-white" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="relative z-40 h-4 w-4 rounded-full border-2 border-white/60 bg-[#1d1d1d]" />

                <div className="mt-5">
                  <p className="text-[clamp(9px,1.1vw,14px)] leading-tight text-white/80">
                    Generate insights,
                    <br />
                    outputs, or automation
                  </p>

                  <div className="mt-4 flex items-center">
                    <div className="h-px w-[clamp(40px,7vw,100px)] bg-white" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default page;
