"use client";

import { motion } from "framer-motion";

const teamMember = {
  name: "Zachary Christensen, RFC",
  title: "Personal Wealth Advisor, IRA Specialist",
  imageUrl: "/images/vario-images/zac-new.png",
  bio: "Zachary is a Wealth Advisor with extensive experience with self-directed IRAs. He specializes in providing personalized guidance on alternative investment strategies, including private equity, hedge funds, real estate, and commodities. Zachary's client-centric approach emphasizes transparency, integrity, and a commitment to delivering results. Passionate about financial literacy, he actively engages in mentorship programs and industry initiatives. Zachary is dedicated to empowering clients to achieve their financial goals through innovative and tax tailored investment solutions.",
  quote:
    "Empowering clients through innovative investment strategies isn't just our mission—it's our commitment to building lasting financial legacies that transcend generations.",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function MeetTheTeam() {
  return (
    <div className="bg-[#F8FBFF] py-20 sm:py-28 lg:py-32 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="mx-auto mt-12 sm:mt-16 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div variants={itemVariants} className="w-full max-w-sm">
              <img
                alt={teamMember.name}
                src={teamMember.imageUrl}
                className="aspect-[4/5] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 shadow-lg"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 w-full">
              <h3 className="text-2xl font-semibold text-[#011E35] sm:text-3xl leading-tight">
                {teamMember.name}
              </h3>
              <p className="mt-3 text-lg text-[#011E35] leading-7 font-medium">
                {teamMember.title}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 w-full max-w-3xl"
            >
              <p className="text-base/7 text-[#011E35] text-left sm:text-center">
                {teamMember.bio}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 sm:mt-12 w-full max-w-3xl relative"
            >
              <div className="relative px-6 sm:px-8 py-6 sm:py-8 bg-white/60 rounded-2xl border border-[#011E35]/10 shadow-sm">
                <svg
                  className="absolute top-4 left-4 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 text-[#005EB8]/30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-lg/8 sm:text-xl/8 text-[#011E35] font-medium italic relative z-10 pl-8 sm:pl-12">
                  {teamMember.quote}
                </blockquote>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
