import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PlaybookCTA from "@/components/PlaybookCTA";

export const metadata: Metadata = {
  title: "How to Calculate Your Book CAC",
  description:
    "A simple model for estimating your client acquisition cost when distributing books via paid ads.",
};

export default function BookCACCalculatorPage() {
  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-24 px-6 fade-in">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            PLAYBOOK — RESOURCE 03
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            How to Calculate Your Book CAC
          </h1>
          <p className="text-gray-500 text-lg mb-10">
            A simple model for estimating your client acquisition cost when
            distributing books via paid ads. Includes a worked example at three
            price points.
          </p>

          <div className="text-gray-600 leading-[1.6] space-y-8">
            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                Why Book CAC Is Different
              </h2>
              <p>
                Standard paid acquisition math: Ad Spend ÷ Clients Acquired = CAC
              </p>
              <p>
                Book-based acquisition changes the equation because the book
                generates revenue on the front end. When you run ads to a book
                bundle offer, a portion of your spend comes back immediately —
                before a single sales call is booked. This creates the
                possibility of negative CAC.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The Inputs You Need
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                        Input
                      </th>
                      <th className="text-left py-3 font-semibold text-gray-900">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Monthly ad spend</td>
                      <td className="py-3">
                        What you spend on Meta, Google, or YouTube per month
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Book bundle price</td>
                      <td className="py-3">What you charge for the book + bonus bundle</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Book bundle conversion rate</td>
                      <td className="py-3">% of ad clicks that buy the book bundle</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Reader-to-lead rate</td>
                      <td className="py-3">
                        % of book buyers who engage with an Intellibook trigger
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Lead-to-call rate</td>
                      <td className="py-3">% of captured leads who book a call</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Call-to-close rate</td>
                      <td className="py-3">% of calls that convert to a paying client</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">High-ticket offer price</td>
                      <td className="py-3">Your backend program price</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The Formula
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Step 1</strong> — Book Revenue = Ad Spend ÷ Cost Per
                  Click × Conversion Rate × Book Price
                </p>
                <p>
                  <strong>Step 2</strong> — Net Spend = Ad Spend − Book Revenue
                </p>
                <p>
                  <strong>Step 3</strong> — Clients = Ad Spend ÷ Cost Per Click
                  × Conversion Rate × Reader-to-Lead Rate × Lead-to-Call Rate ×
                  Call-to-Close Rate
                </p>
                <p>
                  <strong>Step 4</strong> — Book CAC = Net Spend ÷ Clients
                  Acquired
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                Worked Example — Three Scenarios
              </h2>
              <p className="mb-4">
                Assumptions held constant: $10,000 monthly ad spend, $2.00 CPC
                (5,000 clicks), 4% book conversion (200 buyers), 40%
                reader-to-lead (80 leads), 25% lead-to-call (20 calls), 20% close
                rate (4 clients).
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Scenario A — $47 Book Bundle
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>Book revenue: $9,400</li>
                    <li>Net spend: $600</li>
                    <li>Book CAC: $150</li>
                    <li>Backend at $10,000 → Revenue: $40,000</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Scenario B — $97 Book Bundle
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>Book revenue: $19,400</li>
                    <li>Net spend: −$9,400 (front end is profitable)</li>
                    <li>Book CAC: −$2,350 (negative CAC)</li>
                    <li>Backend at $10,000 → Revenue: $40,000</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Scenario C — $197 Book Bundle
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>Book revenue: $39,400</li>
                    <li>Net spend: −$29,400</li>
                    <li>Book CAC: −$7,350</li>
                    <li>Backend at $25,000 → Revenue: $100,000</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                What Moves the Needle Most
              </h2>
              <ol className="list-decimal pl-6 space-y-1">
                <li>
                  Call-to-close rate — going from 20% to 30% increases clients
                  acquired by 50% with no change in spend
                </li>
                <li>
                  Book bundle price — higher price compresses net CAC faster than
                  any other lever
                </li>
                <li>
                  Reader-to-lead rate — determined by Intellibook trigger
                  placement
                </li>
                <li>
                  Lead-to-call rate — determined by AI SDR quality and speed
                </li>
                <li>
                  Ad conversion rate — optimize this last, not first
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                What This Model Doesn&apos;t Account For
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Referrals from readers who share the book</li>
                <li>Organic distribution at events or through gifting</li>
                <li>Long-tail attribution from readers who engage months later</li>
                <li>Brand equity from having a published book in market</li>
              </ul>
              <p className="mt-4">
                All of these make the real-world economics better than the model
                above. The model is intentionally conservative.
              </p>
              <p className="mt-2 italic">
                No book yet? Not a blocker. New Wave Acquisitions ghostwrites
                the book as part of the engagement. The CAC model above applies
                from day one of distribution.
              </p>
            </div>
          </div>

          <PlaybookCTA
            headline="Want to run your own numbers?"
            subline="Apply and we'll model the economics for your specific offer before you commit to anything."
          />
        </div>
      </section>
    </PageTransition>
  );
}
