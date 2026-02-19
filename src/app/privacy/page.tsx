import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for New Wave Acquisitions.",
};

export default function PrivacyPage() {
  return (
    <PageTransition>
    <section className="pt-16 md:pt-24 pb-24 px-6 fade-in">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Privacy Policy</h1>
        <p className="text-gray-600 leading-[1.6]">
          Placeholder. Add your privacy policy content here.
        </p>
      </div>
    </section>
    </PageTransition>
  );
}
