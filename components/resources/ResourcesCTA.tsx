"use client";

import { motion } from "framer-motion";

export default function ResourcesCTA() {
  return (
    <div className="bg-[#F8FBFF]">
      <div className="px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-balance text-[#011E35] sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Ready to Plan Your Retirement?
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base text-pretty text-[#011E35] sm:mt-6 sm:text-lg/8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Get personalized retirement planning advice tailored to your unique
            financial situation and goals.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <motion.a
              href="/contact"
              className="rounded-md bg-[#005EB8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.a>
            <motion.a
              href="/accredited-investor"
              className="text-sm/6 font-semibold text-[#011E35]"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Check Your Accredited Status{" "}
              <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
