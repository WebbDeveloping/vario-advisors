"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <div className="relative bg-[#F8FBFF] overflow-x-hidden py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        {/* Image Section - Left Side */}
        <motion.div
          className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0 overflow-hidden">
            <img
              alt="Retirement planning and real assets"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="absolute inset-0 size-full bg-bg object-cover"
            />
          </div>
        </motion.div>

        {/* Content Section - Right Side */}
        <div className="px-6 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:contents lg:pb-0 lg:pt-0">
          <motion.div
            className="mx-auto max-w-2xl lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none xl:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-sm font-semibold text-[#011E35] uppercase tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Story
            </motion.p>
            <motion.h2
              className="mt-3 text-3xl font-semibold tracking-tight text-pretty text-[#011E35] sm:text-4xl leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building Safer, Stronger Retirements
            </motion.h2>
            
            <motion.div
              className="mt-6 sm:mt-8 space-y-4 text-sm leading-6 text-[#011E35] sm:space-y-5 sm:text-base sm:leading-7 lg:max-w-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                My name is Zach Christensen, and the roots of Vario Advisors go back to my grandparents in Victor, Idaho.
              </p>
              <p>
                My grandfather trusted the stock market with his retirement savings.
              </p>
              <p>
                When the market turned, everything he worked for was wiped out.
              </p>
              <p>
                To make ends meet, he took a job in a nursing home — working until the final days of his life.
              </p>
              <p>
                My grandmother's story was different.
              </p>
              <p>
                She owned land — a real, tangible asset.
              </p>
              <p>
                When she sold it, that one decision provided the financial security that the stock market couldn't.
              </p>
              <p>
                These two outcomes shaped my life and my philosophy.
              </p>
              <p className="text-base font-semibold text-[#011E35] leading-7 sm:text-lg sm:leading-8">
                Real assets matter.
              </p>
              <p className="text-base font-semibold text-[#011E35] leading-7 sm:text-lg sm:leading-8">
                Predictability matters.
              </p>
              <p className="text-base font-semibold text-[#011E35] leading-7 sm:text-lg sm:leading-8">
                Retirees deserve better.
              </p>
              <p>
                Vario Advisors was created with a mission:
              </p>
              <p className="text-base font-medium text-[#011E35] leading-7 sm:text-lg sm:leading-8">
                to help families build retirements that aren't dependent on the stock market.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

