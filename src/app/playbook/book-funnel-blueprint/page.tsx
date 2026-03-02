import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PlaybookCTA from "@/components/PlaybookCTA";

export const metadata: Metadata = {
  title: "The Book Funnel Blueprint",
  description:
    "The end-to-end map of how a book becomes a client acquisition system — from instrumentation to attribution.",
};

export default function BookFunnelBlueprintPage() {
  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-24 px-6 fade-in">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            PLAYBOOK — RESOURCE 01
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            The Book Funnel Blueprint
          </h1>
          <p className="text-gray-500 text-lg mb-10">
            The end-to-end map of how a book becomes a client acquisition system
            — from instrumentation to attribution.
          </p>

          <div className="text-gray-600 leading-[1.6] space-y-8">
            <p>
              Most authors treat a book as a credibility asset. It sits on a
              shelf, gets handed out at events, and maybe generates a few inbound
              emails. That&apos;s not a system. That&apos;s a brochure.
            </p>
            <p>
              The Book Funnel Blueprint maps out how a book becomes active
              acquisition infrastructure — capturing reader intent, qualifying
              leads automatically, and attributing revenue back to the exact
              content that drove it.
            </p>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The 5-Stage Loop
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 1 — Instrumentation
                  </h3>
                  <p className="mb-3">
                    Before the book ships, every chapter is embedded with:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>SMS triggers</strong> — a short prompt at the end
                      of each chapter (e.g., &quot;Text CHAPTER3 to [number] to
                      get the template mentioned here&quot;)
                    </li>
                    <li>
                      <strong>QR codes</strong> — scannable in physical copies,
                      linkable in digital
                    </li>
                    <li>
                      <strong>Trackable CTAs</strong> — unique URLs per chapter
                      so you know exactly where a lead came from
                    </li>
                  </ul>
                  <p className="mt-3">
                    The goal: turn passive reading into measurable behavior.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 2 — Capture
                  </h3>
                  <p className="mb-3">
                    When a reader engages with any trigger:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Their phone number and opt-in consent are captured</li>
                    <li>
                      The chapter, format (physical/digital/audio), and timestamp
                      are logged
                    </li>
                    <li>
                      The lead is tagged with an intent score based on which
                      chapters they engaged with
                    </li>
                  </ul>
                  <p className="mt-3">
                    Chapters closer to your offer carry higher intent weight than
                    early chapters.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 3 — Qualification
                  </h3>
                  <p className="mb-3">
                    Once captured, the AI SDR engages the lead via SMS:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Opens with a contextual message tied to the chapter they
                      triggered
                    </li>
                    <li>Helps the reader understand if the offer is right for them</li>
                    <li>Handles questions and objections in your voice</li>
                    <li>
                      Books qualified leads to your calendar when the time is
                      right
                    </li>
                    <li>Disqualifies gracefully — no human time wasted</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 4 — Conversion
                  </h3>
                  <p>
                    Qualified leads land on your calendar as warm, context-rich
                    prospects. They&apos;ve already read your methodology,
                    engaged with your content, and had their questions answered.
                    Close rates on book-sourced leads run significantly higher
                    than cold traffic because trust is pre-built before the call
                    starts.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 5 — Attribution
                  </h3>
                  <p className="mb-3">CoreText closes the loop:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Tracks which chapters, CTAs, and trigger points led to
                      booked calls
                    </li>
                    <li>Records AI SDR conversation outcomes</li>
                    <li>Maps revenue back to first reader touchpoint</li>
                    <li>
                      Produces a full-funnel view: chapter → CTA → conversation
                      → call → close
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The Compounding Effect
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                        Standard Ad Funnel
                      </th>
                      <th className="text-left py-3 font-semibold text-gray-900">
                        Book Funnel
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Spend stops → leads stop</td>
                      <td className="py-3">Book keeps distributing → leads keep coming</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Cold traffic → high CAC</td>
                      <td className="py-3">Warm readers → lower CAC</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">No content equity</td>
                      <td className="py-3">Book is a permanent asset</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Platform-dependent</td>
                      <td className="py-3">Owned infrastructure</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Attribution guesswork</td>
                      <td className="py-3">Chapter-level attribution</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                What You Need to Activate This
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>A proven high-ticket offer ($5K+ that closes)</li>
                <li>An SMS platform (we use SuperPhone as the backbone)</li>
                <li>A CRM or calendar tool for booking</li>
                <li>A distribution plan (paid book bundles or organic)</li>
              </ul>
              <p className="mt-4 italic">
                Don&apos;t have a book yet? That&apos;s the norm, not the
                exception. New Wave Acquisitions ghostwrites the book for you
                through six 90-minute extraction sessions. No writing required.
              </p>
            </div>
          </div>

          <PlaybookCTA
            headline="Ready to build your system?"
            subline="We handle ghostwriting, instrumentation, AI SDR training, CoreText setup, and distribution — end to end."
          />
        </div>
      </section>
    </PageTransition>
  );
}
