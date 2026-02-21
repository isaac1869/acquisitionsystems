import type { Metadata } from "next";

const description =
  "Three layers, one acquisition engine: Intellibook, AI SDR Twin, and CoreText. Deep dive into the system.";

export const metadata: Metadata = {
  title: "Product",
  description,
  openGraph: {
    title: "Product | New Wave Acquisitions",
    description,
    url: "https://acquisitionsystems.io/product",
  },
};

export default function ProductPageRoute() {
  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Product
        </h1>
        <p className="text-gray-500 mt-4">Coming soon.</p>
      </div>
    </section>
  );
}
