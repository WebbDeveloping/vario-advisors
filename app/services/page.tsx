"use client";

import { motion } from "framer-motion";
import Futures from "@/components/ui/vario-icons/Futures";
import HedgeFunds from "@/components/ui/vario-icons/HedgeFunds";
import PrivateEquity from "@/components/ui/vario-icons/private-equity";
import Commodities from "@/components/ui/vario-icons/Commodities";
import RealEstate from "@/components/ui/vario-icons/RealEstate";
import VentureCapital from "@/components/ui/vario-icons/VentureCapital";
import CTABanner from "@/components/ui/CTABanner";
import TransitionImage from "@/components/ui/TransitionImage";

const stats = [
  { label: "Retirement plans created", value: "44 million" },
  { label: "Assets under management", value: "$119 trillion" },
  { label: "Retirees served annually", value: "46,000" },
];

// Retirement plans include:
const values = [
  {
    name: "Income waterfall design",
    description:
      "We structure your retirement income to flow from the most tax-efficient sources first, ensuring your savings last longer while maintaining your desired lifestyle throughout retirement.",
    icon: Futures,
  },
  {
    name: "Longevity planning",
    description:
      "With people living longer than ever, we help you plan for a retirement that could span 30+ years. Our strategies account for extended lifespans and ensure your income never runs out.",
    icon: HedgeFunds,
  },
  {
    name: "Social Security optimization",
    description:
      "Timing matters. We help you determine the optimal age to claim Social Security benefits, potentially increasing your lifetime benefits by tens of thousands of dollars.",
    icon: PrivateEquity,
  },
  {
    name: "Inflation protection",
    description:
      "Inflation erodes purchasing power over time. We incorporate strategies and asset classes designed to help your retirement income keep pace with rising costs of living.",
    icon: Commodities,
  },
  {
    name: "Required distribution planning",
    description:
      "Required Minimum Distributions (RMDs) can create tax challenges. We help you plan ahead to minimize the tax impact while meeting all legal requirements.",
    icon: RealEstate,
  },
  {
    name: "Tax-focused withdrawal strategies",
    description:
      "The order in which you withdraw from different accounts can significantly impact your tax burden. We coordinate with your tax professional to optimize your after-tax retirement income.",
    icon: VentureCapital,
  },
];
const investmentStrategies = [
  {
    name: "Real Asset Strategies",
    description:
      "Diversify your retirement portfolio with tangible assets that provide inflation protection and stable returns.",
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Land and Real Estate Allocations",
    description:
      "Access institutional-quality real estate investments for consistent income and long-term appreciation potential.",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Private Credit",
    description:
      "Generate steady retirement income through private lending opportunities with attractive risk-adjusted returns.",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Structured Note Strategies",
    description:
      "Protect your retirement savings with structured products that offer downside protection and growth potential.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Oil & Gas Opportunities",
    description:
      "Participate in energy sector investments that can provide tax advantages and income diversification.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Private Equity Allocations",
    description:
      "Invest in private companies and alternative assets typically unavailable to traditional retirement portfolios.",
    imageUrl: "/images/vario-services-hero/6.png",
  },
];

export default function ServicePage() {
  return (
    <div className="bg-surface overflow-x-hidden">
      <main>
        {/* Hero section */}
        <div className="relative isolate bg-[#F8FBFF]/10">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-36 sm:pb-32 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-7xl"
                  >
                    Services We Offer
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-6 text-base font-medium text-pretty text-gray-500 sm:mt-8 sm:text-lg sm:max-w-md lg:max-w-none lg:text-xl/8"
                  >
                    Most retirees still rely on outdated strategies like the
                    60/40 portfolio — a model built for a world that no longer
                    exists.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-base font-medium text-pretty text-gray-500 sm:mt-8 sm:text-lg sm:max-w-md lg:max-w-none lg:text-xl/8"
                  >
                    We combine traditional retirement planning with modern
                    alternative investment strategies to help create
                    predictable, stable retirement income.
                  </motion.p>
                </div>
                <div className="mt-10 hidden sm:-mt-44 sm:flex sm:justify-start sm:gap-8 sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="mr-auto w-52 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative"
                    >
                      <img
                        alt="Retired person planning finances"
                        src="/images/vario-services-hero/2.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="relative"
                    >
                      <img
                        alt="Senior couple reviewing retirement documents"
                        src="/images/vario-services-hero/3.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </motion.div>
                  </div>
                  <div className="w-52 flex-none space-y-8 pt-32 sm:pt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="relative"
                    >
                      <img
                        alt="Retirement planning consultation"
                        src="/images/vario-services-hero/5.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="relative"
                    >
                      <img
                        alt="Peaceful retirement lifestyle"
                        src="/images/vario-services-hero/1.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TransitionImage
            position="bottom"
            imageSrc="/images/vario-images/VARIO Advisors long hill.avif"
          />
        </div>

        {/* Our Services Overview section */}
        <div className="relative bg-[#011E35] py-20 sm:py-28 lg:py-32 overflow-x-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-auto lg:max-w-none">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold tracking-tight text-pretty text-surface sm:text-4xl lg:text-5xl text-center uppercase"
              >
                Our Services Overview
              </motion.h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-12 sm:gap-y-16 lg:flex-row lg:gap-y-20 lg:justify-center">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-lg text-gray-200 sm:text-xl/8 text-center">
                    Most retirees still rely on outdated strategies like the
                    60/40 portfolio — a model built for a world that no longer
                    exists.
                  </p>
                  <p className="mt-6 max-w-xl text-base text-gray-300 sm:mt-10 sm:text-base/7 mx-auto text-center">
                    We combine traditional retirement planning with modern
                    alternative investment strategies to help create
                    predictable, stable retirement income.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        {/* <div className="mt-20 sm:mt-32 xl:mx-auto xl:max-w-7xl xl:px-8 lg:mt-40">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            alt="Retired couple enjoying their retirement years"
            src="/images/services-banner/vario-full-banner.png"
            className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
          />
        </div> */}

        {/* Feature section - Retirement Income Planning */}
        <div className="relative overflow-x-hidden">
          <TransitionImage
            position="top"
            imageSrc="/images/vario-images/VARIO Advisors long hill flip 1.png"
          />
          <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-32 lg:px-8 lg:mt-40 pt-20">
            <div className="mx-auto max-w-2xl lg:mx-auto lg:text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-5xl lg:text-center"
              >
                Retirement Income Planning
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 text-base text-gray-700 sm:mt-6 sm:text-lg/8 lg:text-center"
              >
                Your retirement plan includes:
              </motion.p>
            </div>
            <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-base sm:mt-16 sm:grid-cols-2 sm:gap-y-16 sm:text-base/7 lg:mx-auto lg:max-w-none lg:grid-cols-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col lg:text-center"
                >
                  <dt className="text-base font-semibold text-gray-900 sm:text-lg lg:text-center">
                    <motion.div
                      className="mb-6 flex items-center justify-start lg:justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center [&>div]:w-full [&>div]:h-full [&>div>svg]:w-full [&>div>svg]:h-full">
                        <value.icon aria-hidden="true" />
                      </div>
                    </motion.div>
                    {value.name}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-600 sm:mt-1 sm:text-base lg:text-center">
                    {value.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="bg-[#F8FBFF] mt-20 sm:mt-32 lg:mt-48">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center text-sm font-semibold text-[#011E35] font-poppins sm:text-base"
            >
              Our goal is simple:
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-pretty text-[#011E35] mt-2 sm:mt-3 font-poppins"
            >
              Make your retirement income last as long as you do.
            </motion.h3>
          </div>
        </div>

        {/* Alternative Investing Section - Centered Layout */}
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-32 lg:px-8 lg:mt-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Alternative Investing for Retirees
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-center text-base text-gray-700 sm:mt-6 sm:text-lg/8"
            >
              We help retirees understand and access alternative investment
              strategies that can offer greater diversification, lower
              correlation to public markets, more consistent income potential,
              and stronger long-term retirement stability.
            </motion.p>
            <ul
              role="list"
              className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {investmentStrategies.map((strategy, index) => (
                <motion.li
                  key={strategy.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    alt={strategy.name}
                    src={strategy.imageUrl}
                    className="mx-auto h-24 w-24 rounded-full object-cover outline-1 -outline-offset-1 outline-black/5 sm:h-28 sm:w-28"
                  />
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-gray-900 font-poppins sm:text-lg">
                    {strategy.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base">
                    {strategy.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-32 lg:px-8 lg:mt-40">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Accredited Investor Discovery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-sm text-gray-600 sm:mt-6 sm:text-base/7"
            >
              Many retirees qualify for investment opportunities they've never
              been told about. We help you identify whether you're eligible —
              and how it could change your financial future.
            </motion.p>
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-6 sm:mt-16 sm:gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            {/* Level 1 - Smallest: Income Threshold */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end sm:gap-x-16 sm:gap-y-8 sm:p-8 lg:w-64 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
            >
              <p className="flex-none text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Your income meets $200k–$300k thresholds
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-sm font-semibold tracking-tight text-gray-900 sm:text-base">
                  Level 1: Income Qualification
                </p>
                <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                  Annual income thresholds that may qualify you for accredited
                  investor status.
                </p>
              </div>
            </motion.div>
            {/* Level 2 - Small-Medium: Retirement Accounts */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-6 rounded-2xl bg-[#F8FBFF] p-6 sm:w-4/5 sm:max-w-lg sm:flex-row-reverse sm:items-end sm:gap-x-16 sm:gap-y-8 sm:p-8 lg:w-80 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
            >
              <p className="flex-none text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                You have $500k+ in retirement accounts
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-sm font-semibold tracking-tight text-gray-900 sm:text-base">
                  Level 2: Retirement Assets
                </p>
                <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                  Substantial retirement savings can qualify you for exclusive
                  investment opportunities.
                </p>
              </div>
            </motion.div>
            {/* Level 3 - Medium-Large: Real Estate Equity */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-6 rounded-2xl bg-gray-900 p-6 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end sm:gap-x-16 sm:gap-y-8 sm:p-8 lg:w-full lg:max-w-md lg:flex-auto lg:flex-col lg:items-start lg:gap-y-36"
            >
              <p className="flex-none text-2xl font-bold tracking-tight text-white sm:text-3xl">
                You have substantial real estate equity
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-base font-semibold tracking-tight text-white sm:text-lg">
                  Level 3: Real Estate Wealth
                </p>
                <p className="mt-2 text-sm text-gray-400 sm:text-base/7">
                  Significant real estate holdings can unlock access to premium
                  investment strategies.
                </p>
              </div>
            </motion.div>
            {/* Level 4 - Largest: Net Worth */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-6 rounded-2xl bg-[#005EB8] p-6 sm:w-full sm:max-w-2xl sm:flex-row-reverse sm:items-end sm:gap-x-16 sm:gap-y-8 sm:p-8 lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-48"
            >
              <p className="flex-none text-2xl font-bold tracking-tight text-white sm:text-3xl">
                You have $1M+ net worth (excluding your home)
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-base font-semibold tracking-tight text-white sm:text-lg">
                  Level 4: High Net Worth
                </p>
                <p className="mt-2 text-sm text-[#BDDEFD] sm:text-base/7">
                  Meeting the highest accredited investor threshold opens doors
                  to the most exclusive alternative investments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA section */}
        <CTABanner
          title="Check Your Accredited Status"
          description="Many retirees qualify for investment opportunities they've never been told about. Discover if you're eligible for expanded investment options."
          buttons={[
            { text: "Get started", href: "/accredited-investor" },
            {
              text: "Learn more",
              href: "/accredited-investor",
              variant: "secondary",
            },
          ]}
        />
      </main>
    </div>
  );
}
