"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AccreditedInvestorPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    netWorth: "",
    realEstateEquity: "",
    retirementBalances: "",
    annualIncome: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resultType, setResultType] = useState<"qualify" | "review" | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState(1);

  const formatCurrency = (value: string) => {
    // Remove all non-digit characters
    const numbers = value.replace(/\D/g, "");
    if (!numbers) return "";
    // Format as currency (no decimals for simplicity)
    return new Intl.NumberFormat("en-US").format(parseInt(numbers));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Format currency fields
    if (
      [
        "netWorth",
        "realEstateEquity",
        "retirementBalances",
        "annualIncome",
      ].includes(name)
    ) {
      const formatted = formatCurrency(value);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.netWorth.trim()) {
      newErrors.netWorth = "Net worth is required";
    }
    if (!formData.realEstateEquity.trim()) {
      newErrors.realEstateEquity = "Real estate equity is required";
    }
    if (!formData.retirementBalances.trim()) {
      newErrors.retirementBalances = "Retirement balances is required";
    }
    if (!formData.annualIncome.trim()) {
      newErrors.annualIncome = "Annual income is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setCurrentStep(2);
      // Scroll to top of form section
      setTimeout(() => {
        const formSection = document.getElementById("questionnaire");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
    // Clear step 2 errors when going back
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors.netWorth;
      delete newErrors.realEstateEquity;
      delete newErrors.retirementBalances;
      delete newErrors.annualIncome;
      return newErrors;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) {
      return;
    }

    // Determine result type (for display-only, we'll randomly select or use simple logic)
    // Simple logic: if net worth > 1M, more likely to qualify
    const netWorthNum = parseInt(formData.netWorth.replace(/,/g, ""));
    const randomResult = Math.random() > 0.5;
    const qualifies = netWorthNum > 1000000 || randomResult;

    setResultType(qualifies ? "qualify" : "review");
    setIsSubmitted(true);

    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.getElementById("results-section");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="bg-surface overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-20 pb-12 sm:pt-14 sm:pb-16 lg:px-8 lg:h-[35vh] lg:flex lg:items-center overflow-x-hidden min-h-[400px] sm:min-h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-[#011E35]/80" />
        </div>

        {/* Decorative blur elements */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-brand-soft to-brand opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:py-20 w-full">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Accredited Investor Status: Check Your Eligibility
            </motion.h1>
            <motion.p
              className="mt-6 text-base font-medium text-pretty text-gray-200 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Accredited investors gain access to exclusive private-market
              investments. Many retirees already qualify—check if you meet the
              requirements based on net worth, income, or real estate equity.
            </motion.p>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-brand-soft to-brand opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>

      {/* Eligibility Questionnaire Form Section */}
      <div
        id="questionnaire"
        className="bg-surface py-24 sm:py-32 overflow-x-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start">
            {/* Left Column - Hero Content */}
            <motion.div
              className="lg:sticky lg:top-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-text sm:text-4xl lg:text-5xl">
                Unlock Exclusive Investment Opportunities
              </h2>
              <p className="mt-6 text-base text-text-muted sm:text-lg">
                As an accredited investor, you gain access to private-market
                investments that can diversify your portfolio beyond traditional
                stocks and bonds. Many retirees already qualify based on their
                real estate equity, retirement accounts, or net worth — discover
                if you're one of them.
              </p>
              <p className="mt-4 text-base text-text-muted sm:text-lg">
                Complete the questionnaire below to see if you qualify for
                accredited investor status and unlock access to exclusive
                investment opportunities.
              </p>
            </motion.div>

            {/* Right Column - Form */}
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <h3 className="text-2xl font-semibold tracking-tight text-pretty text-text sm:text-3xl mb-6">
                  Eligibility Questionnaire
                </h3>
                <p className="mb-6 text-base text-text-muted sm:text-lg">
                  Enter your information to determine whether you may qualify:
                </p>

                {/* Step Indicator */}
                <div className="mb-8">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                          currentStep >= 1
                            ? "border-[#005EB8] bg-[#005EB8] text-white"
                            : "border-gray-300 bg-white text-gray-400"
                        }`}
                      >
                        <span className="text-sm font-semibold">1</span>
                      </div>
                      <div
                        className={`ml-2 text-sm font-semibold ${
                          currentStep >= 1 ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        Contact Info
                      </div>
                    </div>
                    <div className="mx-4 h-0.5 w-12 bg-gray-300" />
                    <div className="flex items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                          currentStep >= 2
                            ? "border-[#005EB8] bg-[#005EB8] text-white"
                            : "border-gray-300 bg-white text-gray-400"
                        }`}
                      >
                        <span className="text-sm font-semibold">2</span>
                      </div>
                      <div
                        className={`ml-2 text-sm font-semibold ${
                          currentStep >= 2 ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        Financial Info
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <form onSubmit={handleSubmit} className="w-full">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-6"
                  >
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`block w-full rounded-md border ${
                            errors.firstName
                              ? "border-red-300"
                              : "border-gray-300"
                          } bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0`}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`block w-full rounded-md border ${
                            errors.lastName
                              ? "border-red-300"
                              : "border-gray-300"
                          } bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`block w-full rounded-md border ${
                            errors.email ? "border-red-300" : "border-gray-300"
                          } bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between text-sm/6">
                        <label
                          htmlFor="phone"
                          className="block font-semibold text-gray-900"
                        >
                          Phone
                        </label>
                        <p id="phone-description" className="text-gray-400">
                          Optional
                        </p>
                      </div>
                      <div className="mt-2.5">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          aria-describedby="phone-description"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Financial Information */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-6"
                  >
                    <div className="sm:col-span-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Financial Information
                      </h3>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="netWorth"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Net worth (excluding your home)
                      </label>
                      <div className="mt-2.5">
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-gray-500">
                            $
                          </span>
                          <input
                            id="netWorth"
                            name="netWorth"
                            type="text"
                            value={formData.netWorth}
                            onChange={handleInputChange}
                            placeholder="0"
                            className={`block w-full rounded-md border ${
                              errors.netWorth
                                ? "border-red-300"
                                : "border-gray-300"
                            } bg-white pl-8 pr-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0`}
                          />
                        </div>
                        {errors.netWorth && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.netWorth}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="realEstateEquity"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Real estate equity
                      </label>
                      <div className="mt-2.5">
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-gray-500">
                            $
                          </span>
                          <input
                            id="realEstateEquity"
                            name="realEstateEquity"
                            type="text"
                            value={formData.realEstateEquity}
                            onChange={handleInputChange}
                            placeholder="0"
                            className={`block w-full rounded-md border ${
                              errors.realEstateEquity
                                ? "border-red-300"
                                : "border-gray-300"
                            } bg-white pl-8 pr-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0`}
                          />
                        </div>
                        {errors.realEstateEquity && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.realEstateEquity}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="retirementBalances"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Retirement balances
                      </label>
                      <div className="mt-2.5">
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-gray-500">
                            $
                          </span>
                          <input
                            id="retirementBalances"
                            name="retirementBalances"
                            type="text"
                            value={formData.retirementBalances}
                            onChange={handleInputChange}
                            placeholder="0"
                            className={`block w-full rounded-md border ${
                              errors.retirementBalances
                                ? "border-red-300"
                                : "border-gray-300"
                            } bg-white pl-8 pr-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0`}
                          />
                        </div>
                        {errors.retirementBalances && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.retirementBalances}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="annualIncome"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Annual income
                      </label>
                      <div className="mt-2.5">
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-gray-500">
                            $
                          </span>
                          <input
                            id="annualIncome"
                            name="annualIncome"
                            type="text"
                            value={formData.annualIncome}
                            onChange={handleInputChange}
                            placeholder="0"
                            className={`block w-full rounded-md border ${
                              errors.annualIncome
                                ? "border-red-300"
                                : "border-gray-300"
                            } bg-white pl-8 pr-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0`}
                          />
                        </div>
                        {errors.annualIncome && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.annualIncome}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Form Navigation Buttons */}
                <div className="mt-8 flex items-center justify-between border-t border-gray-900/10 pt-6 sm:mt-10 sm:pt-8">
                  {currentStep === 2 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <div
                    className={`${currentStep === 1 ? "w-full" : "ml-auto"}`}
                  >
                    {currentStep === 1 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-full rounded-md bg-[#005EB8] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors sm:w-auto"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="rounded-md bg-[#005EB8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors"
                      >
                        See If You Qualify
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section - Conditional Display */}
      {isSubmitted && resultType && (
        <div
          id="results-section"
          className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14"
        >
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 lg:py-32">
            <motion.div
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.p
                className="text-sm font-semibold text-[#011E35] uppercase tracking-wide text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your Results
              </motion.p>
              <motion.h2
                className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-[#011E35] sm:text-5xl text-center leading-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {resultType === "qualify"
                  ? "You likely qualify for expanded investment options."
                  : "You may qualify with additional details — let's review together."}
              </motion.h2>
              <motion.div
                className="mt-6 sm:mt-8 text-lg text-[#011E35] text-center leading-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="mb-6">
                  {resultType === "qualify"
                    ? "Based on the information you provided, you appear to meet the criteria for accredited investor status. This opens access to exclusive investment opportunities typically unavailable to the general public."
                    : "Your financial profile shows potential for accredited investor qualification. We'd like to review your details more closely to provide a definitive assessment and discuss your options."}
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block rounded-md bg-[#005EB8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
        </div>
      )}
    </div>
  );
}
