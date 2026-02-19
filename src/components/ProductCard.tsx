type ProductCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlight?: boolean;
};

export default function ProductCard({
  eyebrow,
  title,
  description,
  highlight = false,
}: ProductCardProps) {
  return (
    <div
      className={`bg-white p-6 md:p-8 border border-gray-200 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
        highlight ? "ring-1 ring-electric-cyan/30" : ""
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
        {eyebrow}
      </p>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-[1.55]">{description}</p>
    </div>
  );
}
