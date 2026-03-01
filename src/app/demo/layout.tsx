import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellibook Interactive Demo | CLEAR by James Swanwick",
  description:
    "Experience the Intellibook system — from what your reader sees inside CLEAR, to the CoreText intelligence dashboard, to the economics that make it work.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen overflow-hidden bg-[#FAFAFA]"
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      {children}
    </div>
  );
}
