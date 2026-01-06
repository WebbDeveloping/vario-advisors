"use client";

import { motion } from "framer-motion";
import VideoCard from "./VideoCard";

const videos = [
  {
    id: 1,
    title: "Zach's Story",
    description:
      "Hear from one of our clients about their retirement planning journey and how alternative investments transformed their financial future.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    duration: "5:23",
  },
  {
    id: 2,
    title: "Retirement Planning Strategies",
    description:
      "Learn about modern retirement planning strategies that go beyond traditional 60/40 portfolios and help create sustainable income streams.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    duration: "8:45",
  },
  {
    id: 3,
    title: "Why Alternatives Matter",
    description:
      "Discover why alternative investments are becoming essential for retirees seeking diversification, income, and protection from market volatility.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    duration: "6:12",
  },
  {
    id: 4,
    title: "Income-Focused Investing",
    description:
      "Explore investment strategies designed to generate consistent income during retirement while preserving capital for the long term.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    duration: "7:30",
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

export default function VideosSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-5xl">
            Videos
          </h2>
          <p className="mt-4 text-base text-gray-700 sm:mt-6 sm:text-lg/8">
            Watch our educational videos featuring expert insights, client
            stories, and retirement planning strategies.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              videoUrl={video.videoUrl}
              duration={video.duration}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
