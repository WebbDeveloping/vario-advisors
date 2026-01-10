"use client";

import { motion } from "framer-motion";
import VideoCard from "./VideoCard";

const videos = [
  {
    id: 2,
    title: "Why the 6040 Portfolio No Longer Works",
    description:
      "A look at why the 60/40 portfolio is no longer a viable retirement strategy and how alternative investments can help you achieve your financial goals.",
    videoUrl: "https://youtu.be/mRAo1uLh3pU?si=MmoId4YoQhJmtz5y",
    duration: "1:04",
  },
  {
    id: 3,
    title: "How Retirement Income Is Different Than Investing",
    description:
      "A look at how retirement income is different than investing and how alternative investments can help you achieve your financial goals.",
    videoUrl: "https://youtu.be/0nopLeZb6uc?si=189Jrp4F2HwWSUqz",
    duration: "1:07",
  },
  {
    id: 4,
    title: "What Changed in Retirement Planning",
    description:
      "Explore investment strategies designed to generate consistent income during retirement while preserving capital for the long term.",
    videoUrl: "https://youtu.be/IhdQC6tXgpY?si=QdLYQ1LLt8f0u-Dn",
    duration: "1:01",
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
