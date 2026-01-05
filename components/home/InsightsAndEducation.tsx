"use client";

import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Why the 60/40 Portfolio Is Dead",
    href: "#",
    // Image: Stock market charts/graphs showing volatility or decline, professional financial data visualization
    // Search terms: "stock market decline", "portfolio diversification", "financial charts", "market volatility"
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    title: "What Most Advisors Don't Tell Retirees",
    href: "#",
    // Image: Mature professional couple (50+) reviewing documents together, consultant meeting, or advisor-client discussion
    // Search terms: "retirement consultation", "financial advisor meeting", "mature couple planning", "senior financial planning"
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "The Power of Real Assets",
    href: "#",
    // Image: Farmland, ranch land, commercial real estate, or natural landscapes representing tangible property
    // Search terms: "farmland", "real estate investment", "agricultural land", "commercial property", "land investment"
    imageUrl:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    title: "Modern Retirement Income Planning",
    href: "#",
    // Image: Mature professional (50+) at desk with financial documents, calculator, or tablet showing financial planning
    // Search terms: "retirement planning", "financial planning desk", "senior professional working", "retirement strategy"
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function InsightsAndEducation() {
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
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 300,
              }}
            >
              <img
                alt=""
                src={post.imageUrl}
                className="absolute inset-0 -z-10 size-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10" />

              <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
