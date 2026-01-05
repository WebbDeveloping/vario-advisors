"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    name: "Schedule a Call",
    description:
      "We learn about your goals, lifestyle, and retirement vision.",
  },
  {
    number: "02",
    name: "Accredited Status Review",
    description:
      "We evaluate whether you qualify for expanded investment options.",
  },
  {
    number: "03",
    name: "Personalized Retirement Income Plan",
    description:
      "A customized plan that blends traditional and alternative strategies.",
  },
  {
    number: "04",
    name: "Implementation",
    description:
      "We help allocate across the appropriate asset classes to support your retirement goals.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function HowOurProcessWorks() {
  return (
    <div className="bg-[#BDDEFD] py-24 sm:py-32 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          {/* Left Column: Title, Description, and CTA */}
          <motion.div
            className="lg:pr-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-[#011E35] sm:text-5xl">
              How Our Process Works
            </h2>
            <p className="mt-6 text-lg text-[#011E35]">
              A straightforward approach to building your retirement plan. No complexity, no confusion—just clear steps designed to help you achieve your retirement goals.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-md bg-[#005EB8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors inline-block"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Steps */}
          <div className="lg:pl-8">
            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="grid gap-6 sm:gap-8 lg:grid-cols-[200px_1fr] lg:gap-12"
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Number Column */}
                  <div className="flex flex-col">
                    <div className="relative">
                      <motion.div
                        className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl xl:text-8xl"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {step.number}
                      </motion.div>
                      <div className="mt-3 h-1 w-full bg-white/30 sm:mt-4">
                        <motion.div
                          className="h-full bg-brand"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex items-center">
                    <div className="w-full">
                      <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                        <div className="h-2.5 w-2.5 rotate-45 bg-brand sm:h-3 sm:w-3"></div>
                        <span className="text-xs font-medium text-[#011E35] uppercase tracking-wide sm:text-sm">
                          Step {step.number.replace(/^0/, "")}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-[#011E35] sm:mb-3 sm:text-xl">
                        {step.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#011E35] sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

