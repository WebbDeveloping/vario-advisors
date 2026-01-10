"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
  duration?: string;
}

// Utility function to extract YouTube video ID from various URL formats
function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;

  // Handle youtu.be short URLs: https://youtu.be/mRAo1uLh3pU
  const shortUrlMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortUrlMatch) {
    return shortUrlMatch[1];
  }

  // Handle youtube.com/watch?v= format
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) {
    return watchMatch[1];
  }

  // Handle youtube.com/embed/ format
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) {
    return embedMatch[1];
  }

  // If already just an ID, return it
  if (/^[a-zA-Z0-9_-]+$/.test(url)) {
    return url;
  }

  return null;
}

// Generate YouTube thumbnail URL
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export default function VideoCard({
  title,
  description,
  videoUrl,
  thumbnail,
  duration,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID and generate thumbnail/embed URLs
  const videoId = videoUrl ? extractYouTubeVideoId(videoUrl) : null;
  const thumbnailUrl = thumbnail || (videoId ? getYouTubeThumbnail(videoId) : null);
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
    : null;

  const handleClick = () => {
    if (embedUrl && !isPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-900 cursor-pointer transition-all"
      onClick={handleClick}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {isPlaying && embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : thumbnailUrl ? (
          <motion.img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#005EB8] to-[#011E35]" />
        )}
        {duration && !isPlaying && (
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
  );
}

