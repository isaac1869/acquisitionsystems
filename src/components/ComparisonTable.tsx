const rows: { renting: string; owning: string }[] = [
  {
    renting: "Leads stop when spend stops",
    owning: "Asset keeps working",
  },
  {
    renting: "Cold opt-ins",
    owning: "Buyer-led pipeline",
  },
  {
    renting: "Limited visibility",
    owning: "Intent signals",
  },
  {
    renting: "Platform-dependent",
    owning: "Owned infrastructure",
  },
  {
    renting: "Unclear attribution",
    owning: "End-to-end attribution",
  },
];

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-500 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-600 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function ComparisonTable() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-10">
        Renting vs Owning
      </h2>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 border-b border-gray-200">
          <div className="p-4 md:p-5 border-r border-gray-200 bg-gray-50/80">
            <span className="text-sm font-semibold text-gray-500">Renting</span>
          </div>
          <div className="p-4 md:p-5">
            <span className="text-sm font-semibold text-gray-700">Owning</span>
          </div>
        </div>
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 ${
              i < rows.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="p-4 md:p-5 border-r border-gray-200 flex items-center gap-3">
              <XIcon />
              <span className="text-sm text-gray-600">{row.renting}</span>
            </div>
            <div className="p-4 md:p-5 flex items-center gap-3">
              <CheckIcon />
              <span className="text-sm font-medium text-gray-800">
                {row.owning}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
