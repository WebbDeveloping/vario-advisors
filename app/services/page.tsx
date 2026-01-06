"use client";

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
  },
  {
    name: "Longevity planning",
    description:
      "With people living longer than ever, we help you plan for a retirement that could span 30+ years. Our strategies account for extended lifespans and ensure your income never runs out.",
  },
  {
    name: "Social Security optimization",
    description:
      "Timing matters. We help you determine the optimal age to claim Social Security benefits, potentially increasing your lifetime benefits by tens of thousands of dollars.",
  },
  {
    name: "Inflation protection",
    description:
      "Inflation erodes purchasing power over time. We incorporate strategies and asset classes designed to help your retirement income keep pace with rising costs of living.",
  },
  {
    name: "Required distribution planning",
    description:
      "Required Minimum Distributions (RMDs) can create tax challenges. We help you plan ahead to minimize the tax impact while meeting all legal requirements.",
  },
  {
    name: "Tax-focused withdrawal strategies",
    description:
      "The order in which you withdraw from different accounts can significantly impact your tax burden. We coordinate with your tax professional to optimize your after-tax retirement income.",
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
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                    Services We Offer
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Most retirees still rely on outdated strategies like the
                    60/40 portfolio — a model built for a world that no longer
                    exists.
                  </p>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    We combine traditional retirement planning with modern
                    alternative investment strategies to help create
                    predictable, stable retirement income.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative">
                      <img
                        alt="Happy retired couple enjoying retirement"
                        src="/images/vario-services-hero/1.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt="Retired person planning finances"
                        src="/images/vario-services-hero/2.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt="Senior couple reviewing retirement documents"
                        src="/images/vario-services-hero/3.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt="Retirement planning consultation"
                        src="/images/vario-services-hero/4.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt="Peaceful retirement lifestyle"
                        src="/images/vario-services-hero/5.png"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Our Services Overview
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                  Most retirees still rely on outdated strategies like the 60/40
                  portfolio — a model built for a world that no longer exists.
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                  We combine traditional retirement planning with modern
                  alternative investment strategies to help create predictable,
                  stable retirement income.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base/7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt="Retired couple enjoying their retirement years"
            src="/images/services-banner/vario-full-banner.png"
            className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
          />
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Retirement Income Planning
            </h2>
            <p className="mt-6 text-lg/8 text-gray-700">
              Your retirement plan includes:
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        <div className="bg-[#F8FBFF] mt-32 sm:mt-48">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
            <h2 className="text-center text-base font-semibold text-[#011E35] font-poppins">
              Our goal is simple:
            </h2>
            <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-pretty text-[#011E35] mt-3 font-poppins">
              Make your retirement income last as long as you do.
            </h3>
          </div>
        </div>

        {/* Alternative Investing Section - Centered Layout */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl">
              Alternative Investing for Retirees
            </h2>
            <p className="mt-6 text-center text-lg/8 text-gray-700">
              We help retirees understand and access alternative investment
              strategies that can offer greater diversification, lower
              correlation to public markets, more consistent income potential,
              and stronger long-term retirement stability.
            </p>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {investmentStrategies.map((strategy) => (
                <li key={strategy.name} className="text-center">
                  <img
                    alt={strategy.name}
                    src={strategy.imageUrl}
                    className="mx-auto h-28 w-28 rounded-full object-cover outline-1 -outline-offset-1 outline-black/5"
                  />
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-gray-900 font-poppins">
                    {strategy.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {strategy.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Accredited Investor Discovery
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Many retirees qualify for investment opportunities they've never
              been told about. We help you identify whether you're eligible —
              and how it could change your financial future.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            {/* Level 1 - Smallest: Income Threshold */}
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-64 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-2xl font-bold tracking-tight text-gray-900">
                Your income meets $200k–$300k thresholds
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-base font-semibold tracking-tight text-gray-900">
                  Level 1: Income Qualification
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Annual income thresholds that may qualify you for accredited
                  investor status.
                </p>
              </div>
            </div>
            {/* Level 2 - Small-Medium: Retirement Accounts */}
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#F8FBFF] p-8 sm:w-4/5 sm:max-w-lg sm:flex-row-reverse sm:items-end lg:w-80 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-2xl font-bold tracking-tight text-gray-900">
                You have $500k+ in retirement accounts
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-base font-semibold tracking-tight text-gray-900">
                  Level 2: Retirement Assets
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Substantial retirement savings can qualify you for exclusive
                  investment opportunities.
                </p>
              </div>
            </div>
            {/* Level 3 - Medium-Large: Real Estate Equity */}
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-md lg:flex-auto lg:flex-col lg:items-start lg:gap-y-36">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                You have substantial real estate equity
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Level 3: Real Estate Wealth
                </p>
                <p className="mt-2 text-base/7 text-gray-400">
                  Significant real estate holdings can unlock access to premium
                  investment strategies.
                </p>
              </div>
            </div>
            {/* Level 4 - Largest: Net Worth */}
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#005EB8] p-8 sm:w-full sm:max-w-2xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-48">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                You have $1M+ net worth (excluding your home)
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Level 4: High Net Worth
                </p>
                <p className="mt-2 text-base/7 text-[#BDDEFD]">
                  Meeting the highest accredited investor threshold opens doors
                  to the most exclusive alternative investments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-[#F8FBFF] mt-16">
          <div className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#011E35] sm:text-5xl">
                Check Your Accredited Status
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-[#011E35]">
                Many retirees qualify for investment opportunities they've never
                been told about. Discover if you're eligible for expanded
                investment options.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/accredited-investor"
                  className="rounded-md bg-[#005EB8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8]"
                >
                  Get started
                </a>
                <a
                  href="/accredited-investor"
                  className="text-sm/6 font-semibold text-[#011E35]"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
