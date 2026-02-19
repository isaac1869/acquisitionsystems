import type { Metadata } from "next";

const description =
  "Apply for early access to the New Wave Acquisitions system. Limited onboarding each quarter.";

export const metadata: Metadata = {
  title: "Apply",
  description,
  openGraph: {
    title: "Apply | New Wave Acquisitions",
    description,
    url: "https://acquisitionsystems.io/apply",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
