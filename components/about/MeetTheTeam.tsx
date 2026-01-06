"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Zachary Christensen, RFC",
    role: "President, Vario Advisors",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
  },
  {
    name: "Joshua Donjuan",
    role: "Capital Strategy & Alternative Investment Planning",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
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
        >
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-[#011E35] sm:text-4xl leading-tight">
            Meet the Team
          </h2>
        </motion.div>
        <motion.div
          className="mx-auto mt-6 sm:mt-8 max-w-2xl lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="flex flex-col"
                variants={itemVariants}
              >
                <img
                  alt={member.name}
                  src={member.imageUrl}
                  className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-xl font-semibold text-[#011E35] sm:text-2xl leading-snug">
                  {member.name}
                </h3>
                <p className="mt-2 text-base text-[#011E35] leading-7">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

