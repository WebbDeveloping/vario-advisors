"use client";

import { motion } from "framer-motion";
import HedgeFunds from "@/components/ui/vario-icons/HedgeFunds";
import RealEstate from "@/components/ui/vario-icons/RealEstate";
import PrivateEquity from "@/components/ui/vario-icons/private-equity";

const features = [
  {
    name: "Retirement Income Planning",
    description:
      "Your retirement should feel predictable — not uncertain. We help you design a long-term income strategy that supports your lifestyle without relying on the ups and downs of the stock market.",
    icon: HedgeFunds,
  },
  {
    name: "Alternative Investment Integration",
    description:
      "Traditional portfolios are not built for today's world. We incorporate real assets, private credit, private equity, structured note strategies, and oil & gas to help strengthen and stabilize your retirement plan.",
    icon: RealEstate,
  },
  {
    name: "Accredited Investor Discovery",
    description:
      "Many retirees qualify for investment opportunities they've never been told about. We help you identify whether you're eligible — and how it could change your financial future.",
    icon: PrivateEquity,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function TheVarioDifference() {
  return (
    <div className="relative bg-surface pt-24 pb-40 sm:pt-32 sm:pb-48 lg:pb-56 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-text sm:text-5xl uppercase text-center">
            The Vario Difference
          </h2>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-text sm:text-xl">
                  <motion.div
                    className="mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center [&>div]:w-full [&>div]:h-full [&>div>svg]:w-full [&>div>svg]:h-full">
                      <feature.icon aria-hidden="true" />
                    </div>
                  </motion.div>
                  {feature.name}
                </h3>
                <p className="mt-1 flex flex-auto flex-col text-base/7 text-text-muted">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Transition image at bottom - white to dark blue */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-40 lg:h-48 pointer-events-none">
        <img
          src="/images/vario-images/VARIO Advisors long hill.avif"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </div>
  );
}
