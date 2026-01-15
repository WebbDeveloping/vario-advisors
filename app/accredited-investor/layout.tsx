import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accredited Investor Status Check - Vario Advisors",
  description:
    "Check if you qualify for accredited investor status and unlock access to exclusive private-market investments typically unavailable to the general public.",
};

export default function AccreditedInvestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
