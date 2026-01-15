"use client";

import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import type { DownloadFile } from "@/lib/downloads";

const articles = [
  {
    id: 1,
    title: "Accredited Investor Checklist",
    description:
      "Determine if you qualify as an accredited investor and unlock access to exclusive investment opportunities not available to the general public.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "February 15, 2024",
    category: "Education",
  },
  {
    id: 2,
    title: "The Power of Real Assets",
    description:
      "Explore how real estate, farmland, and infrastructure investments can provide stable income and inflation protection for your retirement portfolio.",
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "March 1, 2024",
    category: "Alternative Investments",
  },
  {
    id: 3,
    title: "Modern Retirement Income Planning",
    description:
      "Learn how to structure your retirement income to last as long as you do, using strategies that adapt to changing economic conditions.",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "February 22, 2024",
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

interface ArticlesSectionProps {
  downloadFiles?: DownloadFile[];
}

export default function ArticlesSection({ downloadFiles = [] }: ArticlesSectionProps) {
  return (
    <div className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-5xl">
            Articles
          </h2>
          <p className="mt-4 text-base text-gray-700 sm:mt-6 sm:text-lg/8">
            Read our latest insights on retirement planning, alternative
            investments, and strategies for building sustainable retirement
            income.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {articles.map((article) => {
            // Find matching download file
            const matchingFile = downloadFiles.find((file) =>
              matchFileToArticle(article.title, file)
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
                key={article.id}
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                date={article.date}
                category={article.category}
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
