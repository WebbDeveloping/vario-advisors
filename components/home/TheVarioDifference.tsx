"use client";

import {
  CalendarDaysIcon,
  BuildingLibraryIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Retirement Income Planning",
    description:
      "Your retirement should feel predictable — not uncertain. We help you design a long-term income strategy that supports your lifestyle without relying on the ups and downs of the stock market.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Alternative Investment Integration",
    description:
      "Traditional portfolios are not built for today's world. We incorporate real assets, private credit, private equity, structured note strategies, and oil & gas to help strengthen and stabilize your retirement plan.",
    icon: BuildingLibraryIcon,
  },
  {
    name: "Accredited Investor Discovery",
    description:
      "Many retirees qualify for investment opportunities they've never been told about. We help you identify whether you're eligible — and how it could change your financial future.",
    icon: IdentificationIcon,
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
    <div className="bg-surface py-24 sm:py-32">
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
                    className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#005EB8]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
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
    </div>
  );
}
