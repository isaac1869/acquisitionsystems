import type { Metadata } from "next";
import ProductPageContent from "@/components/ProductPageContent";

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

export default function Page() {
  return <ProductPageContent />;
}
