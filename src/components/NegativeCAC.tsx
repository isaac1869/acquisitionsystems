"use client";

import { useState, useCallback } from "react";

const MIN = 2000;
const MAX = 50000;
const STEP = 1000;
const DEFAULT = 10000;
const AD_COST_PER_BUNDLE = 50;
const PROFIT_PER_BUNDLE = 50;

function formatUSD(n: number) {
  return "$" + Number(n).toLocaleString();
}

export default function NegativeCAC() {
  const [adSpend, setAdSpend] = useState(DEFAULT);

  const bundlesSold = Math.floor(adSpend / AD_COST_PER_BUNDLE);
  const frontEndProfit = bundlesSold * PROFIT_PER_BUNDLE;
  const netPosition = frontEndProfit - adSpend;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAdSpend(parseInt(e.target.value, 10));
    },
    []
  );

  return (
    <section id="same-spend" className="reveal py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
          Same spend, different outcome
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          One budget. Two paths.
        </h2>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">
              Monthly ad spend
            </label>
            <span className="text-xl font-semibold tabular-nums">
              {formatUSD(adSpend)}
            </span>
          </div>
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={adSpend}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50/50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              High-ticket ads (renting)
            </h3>
            <p className="text-2xl font-semibold text-gray-900 mb-1">
              {formatUSD(adSpend)}
            </p>
            <p className="text-lg font-semibold text-red-600/90 mb-2">
              Net position: -{formatUSD(adSpend)}
            </p>
            <p className="text-sm text-gray-600">
              Cold leads. Unclear attribution.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 bg-white ring-1 ring-electric-cyan/20">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Book bundle ads (owning)
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              Book bundles sold:{" "}
              <strong className="text-gray-900 tabular-nums">
                {bundlesSold}
              </strong>
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Front-end profit:{" "}
              <strong className="text-gray-900 tabular-nums">
                {formatUSD(frontEndProfit)}
              </strong>
            </p>
            <p
              className={`text-lg font-semibold mt-2 ${
                netPosition >= 0 ? "text-green-700" : "text-gray-900"
              }`}
            >
              Net position:{" "}
              {netPosition >= 0
                ? formatUSD(netPosition)
                : "-" + formatUSD(-netPosition)}
              {netPosition > 0 && (
                <span className="block text-sm font-medium text-green-600/90 mt-0.5">
                  (Negative CAC — paid to acquire)
                </span>
              )}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Warm buyers who already trust your methodology.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 text-center mt-6 max-w-xl mx-auto">
          Same spend. One path rents attention. The other builds an asset that
          creates warm pipeline.
        </p>
      </div>
    </section>
  );
}
