const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
    { name: "Accredited Investor", href: "/accredited-investor" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#011E35] overflow-x-hidden">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm/6 sm:gap-x-12"
        >
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#BDDEFD] hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm/6 text-[#BDDEFD]">
          &copy; {new Date().getFullYear()} Vario Advisors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
