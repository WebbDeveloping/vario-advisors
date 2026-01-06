"use client";

import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

const articles = [
  {
    id: 1,
    title: "Why the 60/40 Portfolio Is Dead",
    description:
      "Traditional retirement portfolios are struggling in today's market. Learn why diversification beyond stocks and bonds is essential for modern retirees.",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    href: "#",
    date: "March 15, 2024",
    category: "Investment Strategy",
  },
  {
    id: 2,
    title: "What Most Advisors Don't Tell Retirees",
    description:
      "Discover the investment opportunities and strategies that many financial advisors overlook when planning for retirement income.",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    href: "#",
    date: "March 8, 2024",
    category: "Retirement Planning",
  },
  {
    id: 3,
    title: "The Power of Real Assets",
    description:
      "Explore how real estate, farmland, and infrastructure investments can provide stable income and inflation protection for your retirement portfolio.",
    imageUrl:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    href: "#",
    date: "March 1, 2024",
    category: "Alternative Investments",
  },
  {
    id: 4,
    title: "Modern Retirement Income Planning",
    description:
      "Learn how to structure your retirement income to last as long as you do, using strategies that adapt to changing economic conditions.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    href: "#",
    date: "February 22, 2024",
    category: "Retirement Planning",
  },
  {
    id: 5,
    title: "Understanding Accredited Investor Status",
    description:
      "Many retirees qualify for investment opportunities they've never heard about. Learn how to determine if you're an accredited investor.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    href: "#",
    date: "February 15, 2024",
    category: "Education",
  },
  {
    id: 6,
    title: "Tax-Efficient Withdrawal Strategies",
    description:
      "The order in which you withdraw from different accounts can significantly impact your tax burden. Discover strategies to maximize after-tax income.",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    href: "#",
    date: "February 8, 2024",
    category: "Tax Planning",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ArticlesSection() {
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
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              href={article.href}
              date={article.date}
              category={article.category}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
