"use client";

import { motion } from "framer-motion";
import ArticleCard from "@/components/resources/ArticleCard";
import type { DownloadFile } from "@/lib/downloads";

const posts = [
  {
    id: 1,
    title: "Accredited Investor Checklist",
    description: "Determine if you qualify as an accredited investor and unlock access to exclusive investment opportunities not available to the general public.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Education",
  },
  {
    id: 2,
    title: "The Power of Real Assets",
    description: "Explore how real estate, farmland, and infrastructure investments can provide stable income and inflation protection for your retirement portfolio.",
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Alternative Investments",
  },
  {
    id: 3,
    title: "Modern Retirement Income Planning",
    description: "Learn how to structure your retirement income to last as long as you do, using strategies that adapt to changing economic conditions.",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Retirement Planning",
  },
];

// Normalize strings for comparison (lowercase, remove special chars)
function normalizeString(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Match article title to download file
function matchFileToArticle(title: string, file: DownloadFile): boolean {
  const normalizedTitle = normalizeString(title);
  const normalizedFileName = normalizeString(file.displayName);
  
  // Check if titles match (exact or contains)
  // normalizeString handles "60/40" → "6040" and "Don't" → "Dont" automatically
  return (
    normalizedTitle === normalizedFileName ||
    normalizedFileName.includes(normalizedTitle) ||
    normalizedTitle.includes(normalizedFileName)
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface InsightsAndEducationProps {
  downloadFiles?: DownloadFile[];
}

export default function InsightsAndEducation({ downloadFiles = [] }: InsightsAndEducationProps) {
  return (
    <div className="bg-white py-24 sm:py-32 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Insights & Education
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {posts.map((post) => {
            // Find matching download file
            const matchingFile = downloadFiles.find((file) =>
              matchFileToArticle(post.title, file)
            );

            const fileType = matchingFile
              ? (matchingFile.extension === "pdf" ? "pdf" : "docx")
              : undefined;

            // Set view-only for PDF (Accredited Investor Checklist)
            // Set download-only for DOCX files (The Power of Real Assets, Modern Retirement Income Planning)
            const isViewOnly = matchingFile?.extension === "pdf";
            const isDownloadOnly = matchingFile?.extension === "docx";

            return (
              <ArticleCard
                key={post.id}
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
                category={post.category}
                downloadable={!!matchingFile}
                downloadUrl={matchingFile?.path}
                fileType={fileType}
                viewOnly={isViewOnly}
                downloadOnly={isDownloadOnly}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
