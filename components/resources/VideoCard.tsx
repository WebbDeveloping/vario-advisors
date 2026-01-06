"use client";

import { motion } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoCardProps {
  title: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
  duration?: string;
}

export default function VideoCard({
  title,
  description,
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  thumbnail,
  duration,
}: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-900 cursor-pointer transition-all"
        onClick={() => setIsOpen(true)}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          {thumbnail ? (
            <motion.img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#005EB8] to-[#011E35]" />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PlayIcon className="ml-1 h-8 w-8 text-[#005EB8]" />
            </motion.div>
          </div>
          {duration && (
            <motion.div
              className="absolute bottom-3 right-3 rounded bg-black/75 px-2 py-1 text-xs font-semibold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {duration}
            </motion.div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm text-gray-300 sm:text-base/7">
            {description}
          </p>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 sm:rounded-lg">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <DialogDescription className="sr-only">{description}</DialogDescription>
          <div className="aspect-video w-full">
            <iframe
              src={videoUrl}
              title={title}
              className="h-full w-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

