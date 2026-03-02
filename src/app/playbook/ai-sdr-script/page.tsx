import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PlaybookCTA from "@/components/PlaybookCTA";

export const metadata: Metadata = {
  title: "AI SDR Qualification Script Template",
  description:
    "A 5-stage SMS conversation framework for qualifying readers and booking calls — without being a booking bot.",
};

export default function AISDRScriptPage() {
  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-24 px-6 fade-in">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            PLAYBOOK — RESOURCE 02
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            AI SDR Qualification Script Template
          </h1>
          <p className="text-gray-500 text-lg mb-10">
            A 5-stage SMS conversation framework for qualifying readers and
            booking calls — without being a booking bot. Full worked example
            using CLEAR by James Swanwick.
          </p>

          <div className="text-gray-600 leading-[1.6] space-y-8">
            <p>
              This is not a script for New Wave Acquisitions. It is a
              qualification conversation framework that any high-ticket service
              provider can adapt for their own offer, audience, and voice.
            </p>
            <p>
              The example throughout: <strong>James Swanwick</strong>, author of{" "}
              <em>
                CLEAR: The Only Neuroscience-Based Method for High Achievers to
                Quit Drinking Without Willpower, Rehab or AA
              </em>
              . Backend offer: <strong>Project 90</strong>, a high-ticket
              alcohol-free coaching program.
            </p>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                How the AI SDR Actually Works
              </h2>
              <p>
                The AI SDR is not a booking bot. Its job is to serve the reader
                first — answering questions, addressing concerns, and helping
                them understand whether the offer is right for them. A booked
                call is one possible outcome of a conversation, not the goal of
                every message.
              </p>
              <p>
                Some readers are ready in 3 messages. Others need 20. The SDR
                adapts based on where the reader is, not where you want them to
                be.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                The Framework: 5 Conversation Stages
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 1 — The Contextual Open
                  </h3>
                  <p className="mb-2">
                    <em>What triggers it:</em> Reader texts a keyword or scans
                    a QR code from a specific chapter.
                  </p>
                  <p className="mb-2">
                    <em>The principle:</em> Open with context from their action,
                    not a pitch about your offer.
                  </p>
                  <p className="mb-2">Example (CLEAR, Chapter 5):</p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    Hey [First Name] — thanks for reaching out. I&apos;m
                    James&apos;s AI assistant. Quick question: what part of
                    Chapter 5 resonated most with you?
                  </blockquote>
                  <p className="mt-2">
                    <em>How to adapt it:</em> Swap in the chapter topic and the
                    author&apos;s name.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 2 — Understand Their Situation
                  </h3>
                  <p className="mb-2">
                    <em>What triggers it:</em> Reader replies to Stage 1.
                  </p>
                  <p className="mb-2">
                    <em>The principle:</em> Before qualifying for fit, understand
                    where they actually are.
                  </p>
                  <p className="mb-2">Example (CLEAR):</p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    That makes a lot of sense. A lot of people reach out after
                    that chapter because it reframes things they&apos;ve felt for
                    a while but couldn&apos;t articulate. Can I ask — are you
                    at a point where you&apos;re seriously thinking about
                    changing your relationship with alcohol, or are you more in
                    the exploring phase right now?
                  </blockquote>
                  <p className="mt-2">
                    <em>How to adapt it:</em> Replace &quot;relationship with
                    alcohol&quot; with whatever your reader is trying to change,
                    fix, or build.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 3 — Qualify for Fit
                  </h3>
                  <p className="mb-2">
                    <em>What triggers it:</em> Reader indicates they are
                    seriously considering a change.
                  </p>
                  <p className="mb-2">
                    <em>The principle:</em> Frame qualifying questions as
                    helping point the reader toward the right path.
                  </p>
                  <p className="mb-2">Example (CLEAR / Project 90):</p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    Got it — and honestly, that clarity is usually the hardest
                    part. A couple of quick questions so I can point you to the
                    right next step: are you running a business or in a
                    high-performance career right now? And roughly, how long have
                    you been thinking about making this change?
                  </blockquote>
                  <p className="mb-2">Disqualify branch:</p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    Thanks for sharing that. James&apos;s program is specifically
                    designed for high performers dealing with alcohol&apos;s
                    impact on their career and output — if that&apos;s not quite
                    where you are right now, I don&apos;t want to point you
                    somewhere that isn&apos;t the right fit. Here&apos;s
                    something that might be more useful: [free resource link].
                  </blockquote>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 4 — Bridge to the Offer
                  </h3>
                  <p className="mb-2">
                    <em>What triggers it:</em> Reader passes the fit check.
                  </p>
                  <p className="mb-2">
                    <em>The principle:</em> One sentence on the problem, one
                    sentence on the result, one soft ask.
                  </p>
                  <p className="mb-2">Example (CLEAR / Project 90):</p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    That&apos;s exactly who Project 90 was built for. It&apos;s a
                    90-day coaching program that uses the same neuroscience
                    framework from the book — but with coaches, accountability,
                    and a personalized plan. A lot of members see the shift in
                    the first two weeks. Would a 20-minute call to walk through
                    whether it&apos;s a fit be worth your time?
                  </blockquote>
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    Stage 5 — Book the Call
                  </h3>
                  <p className="mb-2">
                    <em>What triggers it:</em> Reader says yes to the call.
                  </p>
                  <p className="mb-2">Example (CLEAR / Project 90):</p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    Great. Here&apos;s a link to grab a time directly on
                    James&apos;s team&apos;s calendar: [Calendar Link]. There&apos;s
                    a short intake form — takes about 3 minutes — and James
                    reviews every application personally before the call. See you
                    then.
                  </blockquote>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                Common Objections
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    &quot;I&apos;ve tried to quit before and it didn&apos;t
                    work.&quot;
                  </p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    That&apos;s actually one of the most common things people say
                    before starting Project 90 — and it&apos;s exactly why the
                    program is built on neuroscience instead of willpower. Worth
                    20 minutes to hear how it&apos;s different?
                  </blockquote>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    &quot;How much does it cost?&quot;
                  </p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    The investment depends on your situation — that&apos;s
                    something James&apos;s team walks through on the call so
                    it&apos;s relevant to you, not a generic number. The call is
                    no-obligation. Worth a conversation?
                  </blockquote>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    &quot;I&apos;m not sure I&apos;m ready.&quot;
                  </p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    That&apos;s fair. The call isn&apos;t a commitment. It&apos;s
                    just a conversation to see if the timing and fit are right.
                    James&apos;s team is pretty direct about whether they think
                    it&apos;ll work for you.
                  </blockquote>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    &quot;I just wanted to ask a question about the book.&quot;
                  </p>
                  <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                    Of course — what&apos;s on your mind?
                  </blockquote>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                Key Principles
              </h2>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Serve before selling</li>
                <li>Context before pitch</li>
                <li>One question per message</li>
                <li>Short messages — 2–3 sentences max</li>
                <li>Let the conversation breathe</li>
                <li>Disqualify gracefully</li>
                <li>Never fake being human</li>
              </ol>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">
                Adapting This to Your Offer
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900">
                        CLEAR Example
                      </th>
                      <th className="text-left py-3 font-semibold text-gray-900">
                        Your Version
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">James Swanwick</td>
                      <td className="py-3">Your name</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Quitting drinking / high achievers</td>
                      <td className="py-3">Your transformation / your audience</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Project 90 / 90-day coaching</td>
                      <td className="py-3">Your program name and structure</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">Neuroscience-based method</td>
                      <td className="py-3">Your methodology or unique mechanism</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">$7,500 coaching program</td>
                      <td className="py-3">Your offer price point</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">High-performance career / business owner</td>
                      <td className="py-3">Your qualifying criteria</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <PlaybookCTA
            headline="Ready to build your AI SDR?"
            subline="We train it on your voice, your offer, and your qualifying criteria. One brand per month."
          />
        </div>
      </section>
    </PageTransition>
  );
}
