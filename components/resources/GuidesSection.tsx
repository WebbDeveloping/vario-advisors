"use client";

import { motion } from "framer-motion";
import GuideCard from "./GuideCard";

const guides = [
  {
    id: 1,
    title: "Accredited Investor Checklist",
    description:
      "A comprehensive guide to help you determine if you qualify as an accredited investor and understand the investment opportunities available to you.",
    downloadUrl: "#",
    fileSize: "2.5 MB • 12 pages",
  },
  {
    id: 2,
    title: "Modern Retirement Planning Guide",
    description:
      "Learn how to build a retirement plan that adapts to today's economic landscape, including strategies for income generation and wealth preservation.",
    downloadUrl: "#",
    fileSize: "3.1 MB • 18 pages",
  },
  {
    id: 3,
    title: "Understanding Alternative Investments",
    description:
      "Explore how alternative investments can diversify your portfolio, reduce correlation to public markets, and provide more stable retirement income.",
    downloadUrl: "#",
    fileSize: "2.8 MB • 15 pages",
  },
  {
    id: 4,
    title: "How Real Assets Create Stability",
    description:
      "Discover how real assets like real estate, farmland, and infrastructure can provide inflation protection and consistent returns in your retirement portfolio.",
    downloadUrl: "#",
    fileSize: "2.2 MB • 10 pages",
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

export default function GuidesSection() {
  return (
    <div className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-5xl">
            Guides
          </h2>
          <p className="mt-4 text-base text-gray-700 sm:mt-6 sm:text-lg/8">
            Download our comprehensive guides to help you navigate retirement
            planning and alternative investments.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {guides.map((guide) => (
            <GuideCard
              key={guide.id}
              title={guide.title}
              description={guide.description}
              downloadUrl={guide.downloadUrl}
              fileSize={guide.fileSize}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
