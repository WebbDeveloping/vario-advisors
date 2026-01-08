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
                At Vario Advisors, we understand that your portfolio is more
                than just a number. It represents time and energy invested to
                secure a financial future for loved ones and family, often
                including hours sacrificed away from those very people to
                achieve it. That's why we take our responsibility to our clients
                personally, treating each and every portfolio as if it were our
                own. We will do everything in our power to make sure that you
                feel like you have a "financial partner" at your fingertips.
              </p>
              <p>
                Through our comprehensive and holistic approach, we can assure
                you that all financial strategies will be evaluated, and nothing
                will be forgotten or left on the table. While each case is
                designed independently, they are all treated with the same
                integrity, respect, and detail-oriented forward thinking that is
                paramount to the Vario Advisors experience.
              </p>
              <p>
                We welcome the opportunity to introduce you to our brand of
                tailor-made services, featuring the Vario Fund and
                individualized attention. This is what we do, and we do it well.
              </p>
              <p className="text-base font-medium text-white leading-7 sm:text-lg sm:leading-8 mt-8">
                — Zachary L Christensen, RFC - President
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
