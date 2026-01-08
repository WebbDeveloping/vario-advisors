"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface CTABannerButton {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface CTABannerProps {
  title?: string;
  description?: string;
  buttons: CTABannerButton[];
}

export default function CTABanner({
  title,
  description,
  buttons,
}: CTABannerProps) {
  // Calculate delay for buttons based on what content is shown before them
  const buttonDelay = title && description ? 0.3 : title || description ? 0.2 : 0.4;
  const descriptionDelay = title ? 0.2 : 0.1;

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
          {title && (
            <motion.h2
              className="text-4xl font-semibold tracking-tight text-balance text-[#011E35] sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p
              className="mx-auto mt-4 max-w-xl text-base text-pretty text-[#011E35] sm:mt-6 sm:text-lg/8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: descriptionDelay }}
            >
              {description}
            </motion.p>
          )}
          <motion.div
            className={`${title || description ? "mt-8" : "mt-10"} flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: buttonDelay }}
          >
            {buttons.map((button, index) => {
              const isPrimary = button.variant !== "secondary";
              if (isPrimary) {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={button.href}
                      className="rounded-md bg-[#005EB8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors"
                    >
                      {button.text}
                    </Link>
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={button.href}
                      className="text-sm/6 font-semibold text-[#011E35]"
                    >
                      {button.text} <span aria-hidden="true">→</span>
                    </Link>
                  </motion.div>
                );
              }
            })}
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

