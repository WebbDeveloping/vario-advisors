"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 lg:py-32">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm font-semibold text-[#011E35] uppercase tracking-wide text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Mission
          </motion.p>
          <motion.h2
            className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-[#011E35] sm:text-5xl text-center leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Retirement should be safe, predictable, and built on more than the hope that the market will cooperate.
          </motion.h2>
          <motion.p
            className="mt-6 sm:mt-8 text-lg text-[#011E35] text-center leading-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We help retirees protect their future with smarter planning and access to alternative investment strategies usually unseen in traditional advisory relationships.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
    </div>
  );
}

