export default function Contact() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src="/images/vario-services-hero/1.png"
          className="h-48 w-full bg-gray-50 object-cover sm:h-64 lg:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="pt-12 pb-16 sm:pt-16 sm:pb-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32 lg:pb-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-5xl">
              Let's Build Your Retirement Plan Together
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-2 sm:text-lg/8">
              Get started with a personalized retirement income strategy that combines traditional planning with alternative investments. Schedule a consultation to discover how we can help you build a retirement that doesn't depend on the stock market.
            </p>
            <form action="#" method="POST" className="mt-10 sm:mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="phone" className="block font-semibold text-gray-900">
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
                      className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#005EB8] focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-0"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm/6 font-semibold text-gray-900">Investment Interest</legend>
                  <div className="mt-4 space-y-4 text-sm/6 text-gray-600">
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="under_100k"
                        defaultChecked
                        id="investment-under-100k"
                        name="investment"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#005EB8] checked:bg-[#005EB8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="investment-under-100k">Less than $100K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="100k-500k"
                        id="investment-100k-500k"
                        name="investment"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#005EB8] checked:bg-[#005EB8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="investment-100k-500k">$100K – $500K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="500k-1m"
                        id="investment-500k-1m"
                        name="investment"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#005EB8] checked:bg-[#005EB8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="investment-500k-1m">$500K – $1M</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="over_1m"
                        id="investment-over-1m"
                        name="investment"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#005EB8] checked:bg-[#005EB8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="investment-over-1m">$1M+</label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="mt-8 flex justify-end border-t border-gray-900/10 pt-6 sm:mt-10 sm:pt-8">
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#005EB8] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#004a94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005EB8] transition-colors sm:w-auto"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}