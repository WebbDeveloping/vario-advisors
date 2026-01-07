"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <div className="bg-[#F8FBFF] overflow-x-hidden">
      <div className="px-6 pt-24 pb-32 sm:pt-32 sm:pb-40 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-semibold tracking-tight text-balance text-[#011E35] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build a retirement that doesn't depend on the stock market.
          </motion.h2>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="rounded-md bg-[#005EB8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors"
            >
              Start Your Income Plan
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full -mt-24 sm:-mt-28 lg:-mt-32">
        <img
          src="/images/vario-images/long-banner.avif"
          alt=""
          className="block w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

