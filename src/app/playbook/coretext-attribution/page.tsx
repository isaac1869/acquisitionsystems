import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PlaybookCTA from "@/components/PlaybookCTA";

export const metadata: Metadata = {
  title: "CoreText Attribution Guide",
  description:
    "How to read your attribution data and act on it — from chapter-level engagement to the single most important number to track.",
};

export default function CoreTextAttributionPage() {
  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-24 px-6 fade-in">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            PLAYBOOK — RESOURCE 05
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            CoreText Attribution Guide
          </h1>
          <p className="text-gray-500 text-lg mb-10">
            How to read your attribution data and act on it — from chapter-level
            engagement to the single most important number to track.
          </p>

          <div className="text-gray-600 leading-[1.6] space-y-8">
            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                What CoreText Tracks
              </h2>
              <p>
                Most attribution tools answer: which ad drove this conversion?
                CoreText answers: which content, inside which asset, produced
                this client?
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                        Stage
                      </th>
                      <th className="text-left py-3 font-semibold text-gray-900">
                        What CoreText Records
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Book trigger</td>
                      <td className="py-3">
                        Chapter number, trigger type, format, timestamp
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">AI SDR conversation</td>
                      <td className="py-3">
                        Questions answered, objections raised, drop-off point,
                        outcome
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Call</td>
                      <td className="py-3">
                        Show rate, outcome (closed/follow-up/lost), revenue
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Attribution</td>
                      <td className="py-3">
                        First-touch chapter → last-touch trigger → closed revenue
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The Four Reports That Matter
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Report 1 — Chapter Engagement Rate
                  </h3>
                  <p className="mb-2">
                    <strong>What it shows:</strong> Which chapters generate the
                    most trigger activity.
                  </p>
                  <p className="mb-2">
                    <strong>How to read it:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      High engagement, low conversion = strong content, weak
                      CTA placement
                    </li>
                    <li>
                      Low engagement, high conversion = high-intent content,
                      under-distributed
                    </li>
                    <li>
                      High engagement, high conversion = your acquisition core —
                      protect and expand these
                    </li>
                  </ul>
                  <p className="mt-2">
                    <strong>What to do:</strong> Move CTAs earlier in
                    high-engagement, low-conversion chapters. Use top acquisition
                    chapters as the basis for paid ad creative.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Report 2 — CTA Performance by Type
                  </h3>
                  <p className="mb-2">
                    <strong>What it shows:</strong> Which trigger type (SMS
                    keyword, QR code, URL) converts at the highest rate.
                  </p>
                  <p className="mb-2">
                    Typically: SMS keywords perform best in physical books. QR
                    codes perform best in live/event contexts. URLs perform best
                    in digital formats.
                  </p>
                  <p>
                    <strong>What to do:</strong> Double down on the trigger
                    type that converts best for your primary distribution
                    format.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Report 3 — AI SDR Conversation Outcomes
                  </h3>
                  <p className="mb-2">
                    <strong>What it shows:</strong> Where leads are dropping out
                    of the qualification sequence.
                  </p>
                  <p className="mb-2">
                    <strong>How to read it:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Drop-off after Message 1 = opening message not contextual
                      enough
                    </li>
                    <li>
                      Drop-off after Message 2 = soft qualify question too
                      broad
                    </li>
                    <li>
                      Drop-off after Message 3 = hard qualification thresholds
                      may be too high
                    </li>
                    <li>
                      High book rate but low show rate = calendar handoff too
                      abrupt
                    </li>
                  </ul>
                  <p className="mt-2">
                    <strong>What to do:</strong> Rewrite the message with the
                    highest drop-off first. One change at a time.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Report 4 — First-Touch to Revenue Attribution
                  </h3>
                  <p className="mb-2">
                    <strong>What it shows:</strong> The full path from first
                    reader interaction to closed deal.
                  </p>
                  <p className="mb-2">
                    Look for patterns: Do clients consistently come from the same
                    1–2 chapters? Is there a specific trigger type that precedes
                    most closes? How long is the average time from first trigger
                    to closed deal?
                  </p>
                  <p>
                    <strong>What to do:</strong> Build your next ad campaign
                    around the chapter content that precedes the most closes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                Worked Example
              </h2>
              <p className="mb-4">
                500 books distributed last quarter. CoreText shows:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>
                  Chapter 4 (&quot;The CAC Problem&quot;): 180 triggers, 12
                  booked calls, 3 closed deals
                </li>
                <li>
                  Chapter 7 (&quot;The System Build&quot;): 90 triggers, 18
                  booked calls, 6 closed deals
                </li>
                <li>
                  Chapter 11 (&quot;Case Studies&quot;): 210 triggers, 8 booked
                  calls, 1 closed deal
                </li>
              </ul>
              <p>
                <strong>Reading:</strong> Chapter 7 has the best conversion rate
                per trigger (6.7%) — this is your acquisition chapter. Lead with
                this content in ads. Chapter 11 has the most engagement but
                worst conversion — move the CTA earlier and add more specific
                social proof.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The Optimization Loop
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                        Frequency
                      </th>
                      <th className="text-left py-3 font-semibold text-gray-900">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Weekly</td>
                      <td className="py-3">
                        Check AI SDR drop-off rate. Rewrite any message with
                        &gt;60% drop-off.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Monthly</td>
                      <td className="py-3">
                        Review chapter engagement vs. pipeline conversion.
                        Adjust CTA placement.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Quarterly</td>
                      <td className="py-3">
                        Run full attribution report. Rebuild ad creative around
                        top acquisition chapters.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Each new book run</td>
                      <td className="py-3">
                        Update trigger placement based on previous quarter&apos;s
                        data before reprinting.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The Single Most Important Number
              </h2>
              <blockquote className="border-l-2 border-gray-200 pl-4 py-2 bg-gray-50/60 rounded-r">
                <p className="font-medium text-gray-900">
                  Revenue Per Reader (RPR) = Total Closed Revenue ÷ Total Book
                  Triggers
                </p>
              </blockquote>
              <p className="mt-4">
                This number tells you how much each reader engagement is worth
                in closed revenue. As your system matures and you optimize each
                stage of the loop, RPR should increase quarter over quarter. A
                mature Intellibook system typically produces an RPR of $200–$800+
                depending on offer price and close rate.
              </p>
            </div>
          </div>

          <PlaybookCTA
            headline="Ready to see your attribution data?"
            subline="We build the system, instrument the book, and show you exactly what's driving revenue."
          />
        </div>
      </section>
    </PageTransition>
  );
}
