type CaseStudyCardProps = {
  name: string;
  category: string;
  outcome: string;
};

export default function CaseStudyCard({
  name,
  category,
  outcome,
}: CaseStudyCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-3">
        <span className="text-xs text-gray-500">[Photo]</span>
      </div>
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-xs text-gray-500 mt-1">{category}</p>
      <p className="text-sm text-gray-600 mt-2">{outcome}</p>
      <p className="text-xs text-gray-400 mt-2 italic">Full case study coming soon.</p>
    </div>
  );
}
