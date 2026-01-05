"use client";

import {
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  FireIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const investmentTypes = [
  {
    name: "Real Asset Strategies",
    description:
      "Including land investments and income-producing real estate.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Private Credit Opportunities",
    description:
      "Designed to produce consistent, income-focused returns.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Oil & Gas Investments",
    description:
      "Offering energy exposure and potential tax advantages.",
    icon: FireIcon,
  },
  {
    name: "Private Equity Access",
    description:
      "Opportunities to participate in private-market growth.",
    icon: ChartBarIcon,
  },
  {
    name: "Structured Note Strategies",
    description:
      "Institutional-level tools for protection and income.",
    icon: DocumentTextIcon,
  },
  {
    name: "Tax-Efficient Retirement Structures",
    description:
      "We coordinate with your tax professional to help optimize your after-tax income.",
    icon: ShieldCheckIcon,
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
      ease: "easeOut",
    },
  },
};

export default function WhatWeHelpYouInvestIn() {
  return (
    <div className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              className="flex flex-col"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-text sm:text-xl">
                <motion.div
                  className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#005EB8]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <investment.icon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </motion.div>
                {investment.name}
              </h3>
              <p className="mt-1 flex flex-auto flex-col text-base/7 text-text-muted">{investment.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

