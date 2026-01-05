"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <div className="relative bg-[#BDDEFD]">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        {/* Image Section - Left Side */}
        <motion.div
          className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt="Retirement planning and real assets"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="absolute inset-0 size-full bg-bg object-cover"
            />
          </div>
        </motion.div>

        {/* Content Section - Right Side */}
        <div className="px-6 lg:contents">
          <motion.div
            className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-base/7 font-semibold text-[#011E35] uppercase tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Story
            </motion.p>
            <motion.h2
              className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#011E35] sm:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building Safer, Stronger Retirements
            </motion.h2>
            
            <motion.div
              className="mt-6 space-y-6 text-base/7 text-[#011E35] lg:max-w-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                My grandfather worked hard his entire life, trusting his retirement to the stock market. A downturn erased nearly everything. He was forced to work until the day he died.
              </p>
              <p>
                My grandmother, however, owned land — a real asset that didn't care about market volatility. That land became the key to her retirement, providing the safety and dignity she deserved.
              </p>
              <p>
                That experience shaped my belief that retirees deserve more than Wall Street alone can offer.
              </p>
              <p className="text-lg font-medium text-[#011E35]">
                At Vario Advisors, our mission is simple: Build safer, stronger retirements by combining modern planning with time-tested alternative investment strategies.
              </p>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/about"
                className="rounded-md bg-[#005EB8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors inline-block"
              >
                Watch Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

