"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// Loading component
const LoadingComponent = () => (
  <div className="flex h-64 items-center justify-center border border-border-card bg-surface">
    <p className="text-text-muted">Loading component...</p>
  </div>
);

// Create dynamic imports with explicit string literals (required by Next.js)
const componentLoaders: { [key: string]: ReturnType<typeof dynamic> } = {
  "Hero-1": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero1.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "Hero-2": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero2.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "Hero-3": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero3.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "Hero-4": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero4.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "Hero-5": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero5.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "Hero-6": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero6.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "Hero-7": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero7.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "Hero-8": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero8.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "Hero-9": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero9.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "Hero-10": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero10.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Hero-11": dynamic(
    () => import("@/components/example-ui-blocks/Hero/hero11.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Header-1": dynamic(
    () => import("@/components/example-ui-blocks/Header/Header1.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Header-2": dynamic(
    () => import("@/components/example-ui-blocks/Header/Header2.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Header-3": dynamic(
    () => import("@/components/example-ui-blocks/Header/Header3.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Header-4": dynamic(
    () => import("@/components/example-ui-blocks/Header/Header4.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Header-5": dynamic(
    () => import("@/components/example-ui-blocks/Header/Header5.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-1": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection1.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-2": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection2.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-3": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection3.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-4": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection4.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-5": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection5.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-6": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection6.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-7": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection7.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-8": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection8.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-9": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection9.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-10": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection10.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-11": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection11.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-12": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection12.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-13": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection13.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-14": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection14.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Feature Section-15": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Feature Section/FeatureSection15.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "CTA-1": dynamic(
    () => import("@/components/example-ui-blocks/CTA/CTA1.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "CTA-2": dynamic(
    () => import("@/components/example-ui-blocks/CTA/CTA2.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "CTA-3": dynamic(
    () => import("@/components/example-ui-blocks/CTA/CTA3.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "CTA-4": dynamic(
    () => import("@/components/example-ui-blocks/CTA/CTA4.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "CTA-5": dynamic(
    () => import("@/components/example-ui-blocks/CTA/CTA5.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "CTA-6": dynamic(
    () => import("@/components/example-ui-blocks/CTA/CTA6.jsx"),
    {
      ssr: false,
      loading: () => <LoadingComponent />,
    }
  ),
  "CTA-Simple Centered On Brand": dynamic(
    () =>
      import("@/components/example-ui-blocks/CTA/simple-centered-on-brand.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "CTA-Split With Image": dynamic(
    () => import("@/components/example-ui-blocks/CTA/split-with-image.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "CTA-Two Columns With Photo": dynamic(
    () =>
      import("@/components/example-ui-blocks/CTA/two-columns-with-photo.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "CTA-With Image Titles": dynamic(
    () => import("@/components/example-ui-blocks/CTA/with-image-titles.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Content-Centered": dynamic(
    () => import("@/components/example-ui-blocks/Content/centered.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Content-Split With Image": dynamic(
    () => import("@/components/example-ui-blocks/Content/split-with-image.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Content-Two Column With Screenshot": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Content/two-column-with-screenshot.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Content-With Image Titles": dynamic(
    () =>
      import("@/components/example-ui-blocks/Content/with-image-titles.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Content-With Sticky Product Screenshot": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Content/with-sticky-product-screenshot.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Content-With Testimonial And Stats": dynamic(
    () =>
      import(
        "@/components/example-ui-blocks/Content/with-testimonial-and-stats.jsx"
      ),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
  "Content-With Testimonial": dynamic(
    () => import("@/components/example-ui-blocks/Content/with-testimonial.jsx"),
    { ssr: false, loading: () => <LoadingComponent /> }
  ),
};

// Define all component metadata
const componentMap = {
  Hero: [
    { name: "Hero 1", key: "Hero-1" },
    { name: "Hero 2", key: "Hero-2" },
    { name: "Hero 3", key: "Hero-3" },
    { name: "Hero 4", key: "Hero-4" },
    { name: "Hero 5", key: "Hero-5" },
    { name: "Hero 6", key: "Hero-6" },
    { name: "Hero 7", key: "Hero-7" },
    { name: "Hero 8", key: "Hero-8" },
    { name: "Hero 9", key: "Hero-9" },
    { name: "Hero 10", key: "Hero-10" },
    { name: "Hero 11", key: "Hero-11" },
  ],
  Header: [
    { name: "Header 1", key: "Header-1" },
    { name: "Header 2", key: "Header-2" },
    { name: "Header 3", key: "Header-3" },
    { name: "Header 4", key: "Header-4" },
    { name: "Header 5", key: "Header-5" },
  ],
  "Feature Section": [
    { name: "Feature Section 1", key: "Feature Section-1" },
    { name: "Feature Section 2", key: "Feature Section-2" },
    { name: "Feature Section 3", key: "Feature Section-3" },
    { name: "Feature Section 4", key: "Feature Section-4" },
    { name: "Feature Section 5", key: "Feature Section-5" },
    { name: "Feature Section 6", key: "Feature Section-6" },
    { name: "Feature Section 7", key: "Feature Section-7" },
    { name: "Feature Section 8", key: "Feature Section-8" },
    { name: "Feature Section 9", key: "Feature Section-9" },
    { name: "Feature Section 10", key: "Feature Section-10" },
    { name: "Feature Section 11", key: "Feature Section-11" },
    { name: "Feature Section 12", key: "Feature Section-12" },
    { name: "Feature Section 13", key: "Feature Section-13" },
    { name: "Feature Section 14", key: "Feature Section-14" },
    { name: "Feature Section 15", key: "Feature Section-15" },
  ],
  CTA: [
    { name: "CTA 1", key: "CTA-1" },
    { name: "CTA 2", key: "CTA-2" },
    { name: "CTA 3", key: "CTA-3" },
    { name: "CTA 4", key: "CTA-4" },
    { name: "CTA 5", key: "CTA-5" },
    { name: "CTA 6", key: "CTA-6" },
    { name: "Simple Centered On Brand", key: "CTA-Simple Centered On Brand" },
    { name: "Split With Image", key: "CTA-Split With Image" },
    { name: "Two Columns With Photo", key: "CTA-Two Columns With Photo" },
    { name: "With Image Titles", key: "CTA-With Image Titles" },
  ],
  Content: [
    { name: "Centered", key: "Content-Centered" },
    { name: "Split With Image", key: "Content-Split With Image" },
    {
      name: "Two Column With Screenshot",
      key: "Content-Two Column With Screenshot",
    },
    { name: "With Image Titles", key: "Content-With Image Titles" },
    {
      name: "With Sticky Product Screenshot",
      key: "Content-With Sticky Product Screenshot",
    },
    {
      name: "With Testimonial And Stats",
      key: "Content-With Testimonial And Stats",
    },
    { name: "With Testimonial", key: "Content-With Testimonial" },
  ],
};

// Extract category from section ID
const getCategoryFromSectionId = (sectionId: string): string | null => {
  for (const [category, components] of Object.entries(componentMap)) {
    for (const component of components) {
      if (`${category}-${component.name}` === sectionId) {
        return category;
      }
    }
  }
  return null;
};

export default function UIBlocksPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  // Scroll to section when menu item is clicked
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 80; // Account for minimal header and padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active section immediately
      setActiveSection(sectionId);

      // Auto-expand the category containing this section
      const category = getCategoryFromSectionId(sectionId);
      if (category) {
        setExpandedCategories((prev) => new Set(prev).add(category));
      }

      // Close mobile menu after navigation
      setMobileMenuOpen(false);
    }
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Update active section based on scroll position and auto-expand category
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;

      for (const [sectionId, element] of Object.entries(sectionRefs.current)) {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);

            // Auto-expand the category containing the active section
            const category = getCategoryFromSectionId(sectionId);
            if (category) {
              setExpandedCategories((prev) => new Set(prev).add(category));
            }

            // Auto-scroll menu to active item
            const menuItem = document.getElementById(`menu-${sectionId}`);
            if (menuItem && menuRef.current) {
              const menuRect = menuRef.current.getBoundingClientRect();
              const itemRect = menuItem.getBoundingClientRect();
              if (
                itemRect.top < menuRect.top ||
                itemRect.bottom > menuRect.bottom
              ) {
                menuItem.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="fixed left-4 top-16 z-40 rounded-md bg-surface p-2 shadow-lg ring-1 ring-border hover:bg-bg lg:hidden"
        aria-label="Open navigation menu"
      >
        <Bars3Icon className="h-6 w-6 text-text" aria-hidden="true" />
      </button>

      {/* Backdrop Overlay (Mobile Only) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Side Menu - Wider and with better padding */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-80 transform overflow-y-auto border-r border-border bg-surface p-6 transition-transform duration-300 ease-in-out lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-text">UI Blocks</h2>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md p-1 text-text-muted hover:bg-bg hover:text-text lg:hidden"
            aria-label="Close navigation menu"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav
          ref={menuRef}
          className="space-y-2"
          aria-label="UI Blocks navigation"
        >
          {Object.entries(componentMap).map(([category, components]) => {
            const isExpanded = expandedCategories.has(category);
            return (
              <div key={category} className="mb-5">
                <button
                  onClick={() => toggleCategory(category)}
                  className="mb-2 flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold uppercase tracking-wide text-text-muted transition-colors hover:bg-bg hover:text-text"
                  aria-expanded={isExpanded}
                  aria-label={`${
                    isExpanded ? "Collapse" : "Expand"
                  } ${category} category`}
                >
                  <span>{category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-normal text-text-muted">
                      ({components.length})
                    </span>
                    {isExpanded ? (
                      <ChevronDownIcon
                        className="h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronRightIcon
                        className="h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-1.5">
                    {components.map((component) => {
                      const sectionId = `${category}-${component.name}`;
                      return (
                        <li key={sectionId}>
                          <button
                            id={`menu-${sectionId}`}
                            onClick={() => scrollToSection(sectionId)}
                            className={`w-full rounded-md px-4 py-2.5 text-left text-sm transition-colors ${
                              activeSection === sectionId
                                ? "bg-brand text-surface font-medium"
                                : "text-text-muted hover:bg-bg hover:text-text"
                            }`}
                          >
                            {component.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full lg:w-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          {Object.entries(componentMap).map(([category, components]) => (
            <div key={category} className="mb-16">
              <h2
                className="mb-6 text-2xl font-semibold text-text"
                id={`category-${category}`}
              >
                {category}
              </h2>

              {components.map((component) => {
                const sectionId = `${category}-${component.name}`;
                const Component = componentLoaders[component.key];

                if (!Component) {
                  return (
                    <div key={sectionId} className="mb-12">
                      <div className="p-8 text-red-600">
                        Component loader not found for: {component.key}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={sectionId}
                    ref={(el) => {
                      sectionRefs.current[sectionId] = el;
                    }}
                    id={sectionId}
                    className="mb-12 scroll-mt-20"
                  >
                    <div className="mb-4 flex items-center justify-between border-b border-border pb-2">
                      <h3 className="text-lg font-medium text-text">
                        {component.name}
                      </h3>
                      <span className="text-xs text-text-muted">
                        {category}
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-border-card bg-surface">
                      <Component />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
