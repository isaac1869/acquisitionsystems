import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PlaybookCTA from "@/components/PlaybookCTA";

export const metadata: Metadata = {
  title: "The Shoulder Season Playbook",
  description:
    "How high-ticket operators keep pipeline moving between campaigns — without burning ad budget.",
};

export default function ShoulderSeasonPage() {
  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-24 px-6 fade-in">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            PLAYBOOK — RESOURCE 04
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            The Shoulder Season Playbook
          </h1>
          <p className="text-gray-500 text-lg mb-10">
            How high-ticket operators keep pipeline moving between campaigns —
            without burning ad budget.
          </p>

          <div className="text-gray-600 leading-[1.6] space-y-8">
            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                What Is Shoulder Season?
              </h2>
              <p>
                Every high-ticket business has one: the 6–10 week window between
                your peak acquisition season and your next campaign push. Ads are
                paused. Inbound slows. Pipeline thins out.
              </p>
              <p>
                For most operators, shoulder season is dead time. For operators
                with the right infrastructure, it is one of the highest-leverage
                periods of the year.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                Why Shoulder Season Kills Most Funnels
              </h2>
              <p>
                Standard paid acquisition is binary: spend money, get leads. Stop
                spending, get nothing. The operators who grow through shoulder
                season share one trait — they own their audience. They have
                assets that keep generating intent signals regardless of whether
                ads are running.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The 5 Shoulder Season Moves
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Move 1 — Activate Your Existing Reader List
                  </h3>
                  <p>
                    Pull all leads captured more than 60 days ago who never
                    booked a call. Segment by chapter trigger (high-intent vs.
                    early chapters). Send a re-engagement SMS sequence:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Message 1: Check-in tied to the chapter they engaged</li>
                    <li>Message 2: Share a new result or case study</li>
                    <li>Message 3: Soft CTA back to application</li>
                  </ul>
                  <p className="mt-2">
                    A 5–10% re-engagement rate on 500 past readers = 25–50 warm
                    conversations at zero ad spend.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Move 2 — Run a Book Bundle Promotion
                  </h3>
                  <p>
                    Competition for ad inventory drops when other brands pause.
                    Run a limited book bundle offer at $47–$97. Use front-end
                    revenue to offset spend. Readers acquired now become your
                    highest-intent leads when peak season opens.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Move 3 — Host a Live Event or Workshop
                  </h3>
                  <p>
                    A 60–90 minute live session gives your reader list a reason
                    to re-engage without a hard sales ask. Pick one chapter
                    concept and go deep. End with a soft offer. Record it for
                    use as a CoreText-tracked asset going forward.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Move 4 — Deepen Existing Client Relationships
                  </h3>
                  <p>
                    Schedule strategy reviews. Identify upsell opportunities. Ask
                    for referrals and case study participation. A single referral
                    from a happy client is worth more than $5,000 in cold ad
                    spend.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Move 5 — Build the Assets for Next Peak Season
                  </h3>
                  <p>
                    Update your book with new chapters or results. Record video
                    testimonials. Refine your AI SDR script using last
                    season&apos;s conversation data. Identify which chapters
                    drove the most pipeline and build ad creative around them.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                Shoulder Season Pipeline Dashboard
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                        Metric
                      </th>
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                        Target
                      </th>
                      <th className="text-left py-3 font-semibold text-gray-900">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Reader list re-engagement rate</td>
                      <td className="py-3 pr-4">5–10%</td>
                      <td className="py-3">Intellibook / SMS platform</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">New book bundle sales</td>
                      <td className="py-3 pr-4">Enough to offset ad spend</td>
                      <td className="py-3">Ad platform</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Live event attendance rate</td>
                      <td className="py-3 pr-4">20–30% of invites</td>
                      <td className="py-3">Calendar / registration</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Pipeline from referrals</td>
                      <td className="py-3 pr-4">1–2 per month</td>
                      <td className="py-3">CRM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The Core Principle
              </h2>
              <p>
                Shoulder season punishes operators who only rent attention. It
                rewards operators who own assets. A book instrumented with
                Intellibook, backed by an AI SDR and CoreText attribution, is an
                asset that works in every season — peak or not. The system does
                not pause when your ads do.
              </p>
            </div>
          </div>

          <PlaybookCTA
            headline="Build the asset that works year-round."
            subline="One brand per month. Application-based."
          />
        </div>
      </section>
    </PageTransition>
  );
}
