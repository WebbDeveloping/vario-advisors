"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-20 pb-12 sm:pt-14 sm:pb-16 lg:px-8 lg:h-[65vh] lg:flex lg:items-center overflow-x-hidden min-h-[400px] sm:min-h-[500px]">
      {/* Background Image */}
      {/* 
        OPTION 1 (CURRENT): Subtle farmland/agricultural landscape
        - Soft, blurred landscape suggests "real assets" without being literal
        - Lots of negative space for text readability
        - Natural, stable, grounded feel
      */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#011E35]/80" />
      </div>
      {/* 
        ALTERNATIVE OPTIONS (replace URL above):
        
        OPTION 2 - Subtle abstract texture/paper:
        "url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        - Soft texture suggests documents/planning without being distracting
        - Very subtle, professional feel
        
        OPTION 3 - Blurred mountain landscape:
        "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        - Stable, enduring, permanent feel
        - Soft focus keeps attention on text
        
        OPTION 4 - Subtle architectural elements:
        "url('https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        - Professional, established feel
        - Clean lines, subtle depth
        
        OPTION 5 - Soft horizon/sky gradient:
        "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        - Minimal, calming, optimistic
        - Maximum text readability
      */}

      {/* Decorative blur elements */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-brand-soft to-brand opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:py-20 w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Retire With Confidence. Plan With Alternatives.
          </motion.h1>
          <motion.p
            className="mt-6 text-base font-medium text-pretty text-gray-200 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Most retirees are accredited investors — they just don't know it.
            We help you unlock a modern retirement strategy built on
            stability, real assets, and smarter diversification.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="rounded-md bg-[#005EB8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors text-center whitespace-nowrap"
            >
              Book Your Retirement Income Plan
            </Link>
            <Link
              href="/accredited-investor"
              className="text-sm/6 font-semibold text-white hover:text-[#BDDEFD] transition-colors text-center"
            >
              Check Your Accredited Status <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-brand-soft to-brand opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
}

