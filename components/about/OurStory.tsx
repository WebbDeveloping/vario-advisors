"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <div className="relative bg-[#011E35] overflow-x-hidden py-8">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end border-[#011E35]">
        {/* Image Section - Left Side */}
        <motion.div
          className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 lg:items-center lg:justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative h-80 lg:h-auto lg:max-w-2xl lg:w-full lg:px-12 lg:py-6 flex items-center justify-center overflow-hidden">
            <img
              alt="Zachary Christensen, RFC - Personal Wealth Advisor, IRA Specialist"
              src="/images/vario-images/zac-new.png"
              className="relative max-w-full max-h-full bg-bg object-contain"
            />
          </div>
        </motion.div>

        {/* Content Section - Right Side */}
        <div className="px-6 lg:contents">
          <motion.div
            className="mx-auto max-w-2xl pt-16 pb-8 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-8 xl:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-base/7 font-semibold text-white uppercase tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Story
            </motion.p>
            <motion.h2
              className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building Safer, Stronger Retirements
            </motion.h2>

            <motion.div
              className="mt-6 space-y-6 text-base/7 text-gray-100 lg:max-w-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                My name is Zach Christensen, and the roots of Vario Advisors go
                back to my grandparents in Victor, Idaho. My grandfather trusted
                the stock market with his retirement savings, but when the
                market turned, everything he worked for was wiped out. To make
                ends meet, he took a job in a nursing home — working until the
                final days of his life.
              </p>
              <p>
                My grandmother's story was different. She owned land — a real,
                tangible asset. When she sold it, that one decision provided the
                financial security that the stock market couldn't.
              </p>
              <p>
                These two outcomes shaped my life and my philosophy:{" "}
                <span className="font-semibold text-white">
                  Real assets matter. Predictability matters. Retirees deserve
                  better.
                </span>
              </p>
              <p className="text-base font-medium text-white leading-7 sm:text-lg sm:leading-8">
                Vario Advisors was created with a mission: to help families
                build retirements that aren't dependent on the stock market.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
