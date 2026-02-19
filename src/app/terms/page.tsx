import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for New Wave Acquisitions.",
};

export default function TermsPage() {
  return (
    <section className="pt-16 md:pt-24 pb-24 px-6 fade-in">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Terms of Service</h1>
        <p className="text-gray-600 leading-[1.6]">
          Placeholder. Add your terms of service content here.
        </p>
      </div>
    </section>
  );
}
