"use client";

import { motion } from "framer-motion";
import HedgeFunds from "@/components/ui/vario-icons/HedgeFunds";
import RealEstate from "@/components/ui/vario-icons/RealEstate";
import VentureCapital from "@/components/ui/vario-icons/VentureCapital";
import PrivateEquity from "@/components/ui/vario-icons/private-equity";
import Futures from "@/components/ui/vario-icons/Futures";
import TransitionImage from "@/components/ui/TransitionImage";

const principles = [
  {
    name: "Income First",
    description:
      "Retirement should focus on predictable income, not speculation.",
    icon: HedgeFunds,
  },
  {
    name: "Diversify Beyond the Market",
    description:
      "Real assets and private-market investments offer stability the public markets cannot.",
    icon: RealEstate,
  },
  {
    name: "Tax Efficiency Matters",
    description:
      "We collaborate with your tax professional to help optimize your after-tax retirement income.",
    icon: VentureCapital,
  },
  {
    name: "Education Over Sales",
    description: "Our role is to teach, guide, and empower — never pressure.",
    icon: PrivateEquity,
  },
  {
    name: "Long-Term Partnership",
    description: "We aim to be your advisory team for life.",
    icon: Futures,
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
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function OurPhilosophy() {
  return (
    <div className="relative bg-surface py-20 sm:py-28 lg:py-32 overflow-x-hidden">
      <TransitionImage
        position="top"
        imageSrc="/images/vario-images/VARIO Advisors long hill flip 1.png"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-[#011E35] sm:text-4xl text-center uppercase leading-tight">
            Our Philosophy
          </h2>
        </motion.div>
        <motion.div
          className="mx-auto mt-6 sm:mt-8 max-w-2xl lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-6 lg:gap-y-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.name}
                className={`flex flex-col items-center text-center ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-[#011E35] sm:text-2xl leading-snug">
                  <motion.div
                    className="mb-4 mx-auto flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center [&>div]:w-full [&>div]:h-full [&>div>svg]:w-full [&>div>svg]:h-full">
                      <principle.icon aria-hidden="true" />
                    </div>
                  </motion.div>
                  {principle.name}
                </h3>
                <p className="mt-1 flex flex-auto flex-col text-base text-[#011E35] leading-7">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
