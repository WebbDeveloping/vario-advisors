"use client";

import { motion } from "framer-motion";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

interface GuideCardProps {
  title: string;
  description: string;
  downloadUrl?: string;
  fileSize?: string;
  thumbnail?: string;
}

export default function GuideCard({
  title,
  description,
  downloadUrl = "#",
  fileSize,
  thumbnail,
}: GuideCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all hover:shadow-xl"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <motion.div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#005EB8] sm:h-14 sm:w-14"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <DocumentArrowDownIcon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
        </motion.div>
        <h3 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm text-gray-600 sm:text-base/7">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-between">
          {fileSize && (
            <span className="text-xs text-gray-500 sm:text-sm">{fileSize}</span>
          )}
          <motion.a
            href={downloadUrl}
            className="rounded-md bg-[#005EB8] px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download PDF
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

