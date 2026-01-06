"use client";

import { motion } from "framer-motion";

export default function ResourcesHero() {
  return (
    <div className="relative isolate bg-[#F8FBFF]/10 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-36 sm:pb-32 lg:px-8 lg:pt-32">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Educational Resources
          </motion.h1>
          <motion.p
            className="mt-6 text-base font-medium text-pretty text-gray-500 sm:mt-8 sm:text-lg sm:max-w-md lg:max-w-none lg:text-xl/8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Access our comprehensive library of guides, videos, and articles
            designed to help you make informed retirement planning decisions.
          </motion.p>
          <motion.p
            className="mt-4 text-base font-medium text-pretty text-gray-500 sm:text-lg lg:text-xl/8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            From accredited investor checklists to alternative investment
            strategies, find everything you need to plan for a secure retirement.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

