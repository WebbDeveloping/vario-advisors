"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PdfViewerModal from "./PdfViewerModal";
import { Download, Eye } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href?: string;
  date?: string;
  category?: string;
  downloadable?: boolean;
  downloadUrl?: string;
  fileType?: "pdf" | "docx";
}

export default function ArticleCard({
  title,
  description,
  imageUrl,
  href = "#",
  date,
  category,
  downloadable = false,
  downloadUrl,
  fileType,
}: ArticleCardProps) {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (fileType === "pdf" && downloadUrl) {
      setIsPdfModalOpen(true);
    }
  };

  return (
    <>
      <motion.article
        className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.03, y: -5 }}
      >
        <motion.img
          alt=""
          src={imageUrl}
          className="absolute inset-0 -z-10 size-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10" />

        {category && (
          <motion.span
            className="absolute top-6 left-6 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {category}
          </motion.span>
        )}

        <div className="flex flex-col">
          {date && (
            <motion.time
              className="text-sm text-gray-300 sm:text-base/7"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {date}
            </motion.time>
          )}
          <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
            {downloadable ? (
              <span>{title}</span>
            ) : (
              <a href={href}>
                <span className="absolute inset-0" />
                {title}
              </a>
            )}
          </h3>
          <p className="mt-2 text-sm text-gray-300 sm:text-base/7">
            {description}
          </p>
          {downloadable && downloadUrl && (
            <div className="mt-4 flex flex-wrap gap-2">
              {fileType === "pdf" && (
                <Button
                  onClick={handleView}
                  size="sm"
                  variant="secondary"
                  className="bg-white/90 text-gray-900 hover:bg-white"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
              )}
              <Button
                onClick={handleDownload}
                size="sm"
                variant="secondary"
                className="bg-white/90 text-gray-900 hover:bg-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          )}
        </div>
      </motion.article>

      {downloadable && fileType === "pdf" && downloadUrl && (
        <PdfViewerModal
          isOpen={isPdfModalOpen}
          onOpenChange={setIsPdfModalOpen}
          title={title}
          pdfUrl={downloadUrl}
        />
      )}
    </>
  );
}
