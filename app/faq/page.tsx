"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CTABanner from "@/components/ui/CTABanner";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "How does Vario structure tax-free retirement accounts?",
        answer: (
          <div className="space-y-4">
            <p>
              If you have an existing 401k or IRA, our team will help you move
              those funds to a self-directed account that allows for alternative
              investments. If you do not have an existing 401k or IRA, we will
              have a conversation to determine what strategy and account type
              will work best for you. There are no age or income restrictions
              and all of our solutions are customized to each individual
              investor.
            </p>
            <p>
              Next we will determine what note and rate of return works best for
              you as a Vario investor. This is when you will be able to opt-in
              to the tax-free advantage program. Our team will determine a
              customized strategy to help you navigate capital gains taxes at no
              additional cost.
            </p>
            <p>
              Vario's high class investing experience is second to none. All you
              have to do now is collect a monthly payout and we will hand you a
              check to give to the IRS at the end of every year.
            </p>
          </div>
        ),
      },
      {
        question: "Could you explain the concept of a self-directed IRA?",
        answer: (
          <p>
            A self-directed IRA functions much like a traditional IRA, with one
            significant difference: you're not restricted to investing solely in
            the stock market. Instead, you have the freedom to invest in a wide
            range of assets of your choosing. While still benefiting from the
            same tax advantages as a traditional IRA, you have the flexibility
            to diversify your portfolio by allocating funds to unique
            alternative assets like real estate or private lending
            opportunities. This opens up a world of investment possibilities
            beyond conventional stocks and bonds, allowing you to tailor your
            portfolio to better align with your financial goals and risk
            tolerance.
          </p>
        ),
      },
      {
        question:
          "When I invest with VARIO, what account are the funds held in?",
        answer: (
          <p>
            NuView Trust is Vario's self directed IRA custodian. When you invest
            with Vario, you will have an account with NuView.
          </p>
        ),
      },
      {
        question: "What are examples of Alternative Investments?",
        answer: (
          <div className="space-y-4">
            <p>
              Alternative investments are non-traditional investment vehicles
              that go beyond stocks and bonds. Examples of alternative
              investments include private equity, hedge funds, real estate,
              commodities, structured products, and venture capital.
            </p>
            <p>
              At VARIO, we specialize in providing personalized investment
              advisory services that encompass a range of alternative
              investments to diversify our clients' portfolios and potentially
              enhance returns. Our team of experienced advisors carefully
              evaluate and recommend alternative investments based on our
              clients' financial goals, risk tolerance, and time horizon,
              working towards creating a well-rounded investment strategy
              tailored to each client's unique needs.
            </p>
          </div>
        ),
      },
      {
        question:
          "What is private credit, and how does VARIO incorporate it into its investment advisory services?",
        answer: (
          <div className="space-y-4">
            <p>
              Private credit refers to non-bank loans extended to private
              companies or borrowers, typically outside of the public market.
            </p>
            <p>
              VARIO specializes in alternative investment advisory, including
              private credit, as part of our comprehensive investment strategy.
              We work with our clients to identify and invest in opportunities
              within the private credit market, which can offer higher yields
              and diversification benefits compared to traditional fixed income
              investments.
            </p>
            <p>
              Our team conducts thorough due diligence to assess the credit
              quality of potential investments, seeking to provide our clients
              with attractive risk-adjusted returns. By incorporating private
              credit into our investment advisory services, VARIO aims to
              enhance our clients' portfolios with unique and compelling
              opportunities in the alternative investment space.
            </p>
            <div>
              <p className="font-semibold mb-2">
                Some examples of private credit strategies include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Direct lending</strong> – lending to performing
                  operating businesses secured by business equity/cashflows
                </li>
                <li>
                  <strong>Real estate</strong> – to real estate
                  projects/developers
                </li>
                <li>
                  <strong>Infrastructure</strong> - to infrastructure projects
                </li>
                <li>
                  <strong>Distressed</strong> – to companies in difficulty
                </li>
                <li>
                  <strong>Asset based</strong> - to business secured by assets
                  (e.g. airplanes) rather than business-generated cashflows as
                  in direct lending
                </li>
                <li>
                  <strong>Trade finance</strong> - to support trade in goods
                </li>
                <li>
                  <strong>Structured credit</strong> - lending with tranching of
                  credit risk
                </li>
                <li>
                  <strong>Speciality finance</strong> - lending to support e.g.
                  consumer credit or peer-to-peer platforms
                </li>
                <li>
                  <strong>Venture debt</strong> - to early-stage companies
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-surface overflow-x-hidden">
      <main>
        {/* Hero section */}
        <div className="relative isolate bg-[#011E35]">
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
              <div className="mx-auto max-w-2xl text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-7xl"
                >
                  Frequently asked questions
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 text-base font-medium text-pretty text-gray-300 sm:mt-8 sm:text-lg sm:max-w-md lg:max-w-none lg:text-xl/8"
                >
                  Find answers to common questions about our services,
                  investment strategies, and how we can help you plan for
                  retirement.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-4xl">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-16"
              >
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${categoryIndex}-${index}`}
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-600 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <CTABanner
          title="Still have questions?"
          description="Our team is here to help. Contact us to learn more about how we can help you plan for a secure retirement."
          buttons={[
            { text: "Contact us", href: "/contact" },
            { text: "Learn more", href: "/contact", variant: "secondary" },
          ]}
        />
      </main>
    </div>
  );
}
