import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Vario Advisors",
  description:
    "Discover our retirement income planning services and alternative investment strategies designed to create predictable, stable retirement income.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
