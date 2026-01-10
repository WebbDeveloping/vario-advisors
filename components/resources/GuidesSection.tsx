"use client";

import { motion } from "framer-motion";
import GuideCard from "./GuideCard";
import type { DownloadFile } from "@/lib/downloads";

interface GuidesSectionProps {
  downloadFiles: DownloadFile[];
}

// Existing guide definitions with descriptions
const guideDescriptions: Record<string, string> = {
  "Accredited Investor Checklist":
    "A comprehensive guide to help you determine if you qualify as an accredited investor and understand the investment opportunities available to you.",
  "Modern Retirement Planning Guide":
    "Learn how to build a retirement plan that adapts to today's economic landscape, including strategies for income generation and wealth preservation.",
  "Modern Retirement Income Planning":
    "Learn how to build a retirement plan that adapts to today's economic landscape, including strategies for income generation and wealth preservation.",
  "Understanding Alternative Investments":
    "Explore how alternative investments can diversify your portfolio, reduce correlation to public markets, and provide more stable retirement income.",
  "How Real Assets Create Stability":
    "Discover how real assets like real estate, farmland, and infrastructure can provide inflation protection and consistent returns in your retirement portfolio.",
  "Why the 6040 Portfolio Is Dead":
    "Traditional retirement portfolios are struggling in today's market. Learn why diversification beyond stocks and bonds is essential for modern retirees.",
  "What Most Advisors Don't Tell Retirees":
    "Discover the investment opportunities and strategies that many financial advisors overlook when planning for retirement income.",
  "The Power of Real Assets":
    "Explore how real estate, farmland, and infrastructure investments can provide stable income and inflation protection for your retirement portfolio.",
  "Tax-Efficient Withdrawal Strategies":
    "The order in which you withdraw from different accounts can significantly impact your tax burden. Discover strategies to maximize after-tax income.",
  "Understanding Accredited Investor Status":
    "Many retirees qualify for investment opportunities they've never heard about. Learn how to determine if you're an accredited investor.",
};

// Generate a default description for files without a predefined description
function getDescription(title: string): string {
  return (
    guideDescriptions[title] ||
    `Download our comprehensive guide on ${title.toLowerCase()} to help you make informed retirement planning decisions.`
  );
}

// Normalize strings for comparison (lowercase, remove special chars)
function normalizeString(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Match download files to guide titles
function matchFileToGuide(file: DownloadFile, existingTitles: string[]): string | null {
  const normalizedFileTitle = normalizeString(file.displayName);
  
  for (const title of existingTitles) {
    const normalizedTitle = normalizeString(title);
    // Check if titles are similar (exact match or contains)
    if (
      normalizedFileTitle === normalizedTitle ||
      normalizedFileTitle.includes(normalizedTitle) ||
      normalizedTitle.includes(normalizedFileTitle)
    ) {
      return title;
    }
  }
  return null;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function GuidesSection({ downloadFiles }: GuidesSectionProps) {
  // Allowlist of guides to keep on resources page
  const allowedGuides = [
    "Accredited Investor Checklist",
    "Modern Retirement Planning Guide",
    "Modern Retirement Income Planning", // Alternative name for the same guide
    "Understanding Alternative Investments",
    "The Power of Real Assets",
  ];

  // Create guide entries from download files
  const existingTitles = Object.keys(guideDescriptions);
  const guides = downloadFiles
    .map((file) => {
      const matchedTitle = matchFileToGuide(file, existingTitles);
      const title = matchedTitle || file.displayName;
      
      return {
        id: file.filename,
        title,
        description: getDescription(title),
        downloadUrl: file.path,
        fileSize: file.formattedSize,
        displayName: file.displayName,
      };
    })
    .filter((guide) => {
      // Check if guide title or displayName matches allowed guides
      const normalizedTitle = normalizeString(guide.title);
      const normalizedDisplayName = normalizeString(guide.displayName);
      
      return allowedGuides.some((allowed) => {
        const normalizedAllowed = normalizeString(allowed);
        return (
          normalizedTitle === normalizedAllowed ||
          normalizedDisplayName === normalizedAllowed ||
          normalizedTitle.includes(normalizedAllowed) ||
          normalizedDisplayName.includes(normalizedAllowed) ||
          normalizedAllowed.includes(normalizedTitle) ||
          normalizedAllowed.includes(normalizedDisplayName)
        );
      });
    });

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
        {guides.length > 0 ? (
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
        ) : (
          <div className="mt-10 text-center text-gray-500">
            <p>No downloadable guides available at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}
