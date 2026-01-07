"use client";

import { motion } from "framer-motion";
import RealEstate from "@/components/ui/vario-icons/RealEstate";
import HedgeFunds from "@/components/ui/vario-icons/HedgeFunds";
import Commodities from "@/components/ui/vario-icons/Commodities";
import PrivateEquity from "@/components/ui/vario-icons/private-equity";
import Futures from "@/components/ui/vario-icons/Futures";
import VentureCapital from "@/components/ui/vario-icons/VentureCapital";

const investmentTypes = [
  {
    name: "Real Asset Strategies",
    description: "Including land investments and income-producing real estate.",
    icon: RealEstate,
  },
  {
    name: "Private Credit Opportunities",
    description: "Designed to produce consistent, income-focused returns.",
    icon: HedgeFunds,
  },
  {
    name: "Oil & Gas Investments",
    description: "Offering energy exposure and potential tax advantages.",
    icon: Commodities,
  },
  {
    name: "Private Equity Access",
    description: "Opportunities to participate in private-market growth.",
    icon: PrivateEquity,
  },
  {
    name: "Structured Note Strategies",
    description: "Institutional-level tools for protection and income.",
    icon: Futures,
  },
  {
    name: "Tax-Efficient Retirement Structures",
    description:
      "We coordinate with your tax professional to help optimize your after-tax income.",
    icon: VentureCapital,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function WhatWeHelpYouInvestIn() {
  return (
    <div className="relative bg-surface py-24 sm:py-32 overflow-x-hidden">
      {/* Transition image at top - dark blue to white (flipped) */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 sm:h-40 lg:h-48 pointer-events-none">
        <img
          src="/images/vario-images/VARIO Advisors long hill flip 1.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
          // style={{ transform: "scaleY(-1)" }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <motion.div
          className="mx-auto max-w-2xl sm:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-text sm:text-5xl uppercase text-center">
            What We Help You Invest In
          </h2>
        </motion.div>
      </div>
      <motion.div
        className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {investmentTypes.map((investment) => (
            <motion.div
              key={investment.name}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center [&>div]:w-full [&>div]:h-full [&>div>svg]:w-full [&>div>svg]:h-full">
                  <investment.icon />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text sm:text-xl text-center">
                {investment.name}
              </h3>
              <p className="mt-1 text-base/7 text-text-muted text-center">
                {investment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
