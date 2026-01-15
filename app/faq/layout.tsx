import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Vario Advisors",
  description:
    "Find answers to common questions about our services, investment strategies, self-directed IRAs, and how we can help you plan for retirement.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
