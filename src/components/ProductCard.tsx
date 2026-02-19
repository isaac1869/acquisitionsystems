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
      className={`bg-white border rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-electric-cyan/40 hover:shadow-[0_8px_30px_rgba(0,240,255,0.1)] ${
        highlight ? "ring-1 ring-electric-cyan/30" : "border-gray-200"
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
