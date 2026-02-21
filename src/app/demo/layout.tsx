import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellibook Interactive Demo | New Wave Acquisitions",
  description:
    "Experience the Intellibook system — from what your reader sees inside an instrumented book, to the CoreText intelligence dashboard, to the economics that make it work.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0A0A0A] min-h-screen overflow-hidden">
      {children}
    </div>
  );
}
