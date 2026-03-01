import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for New Wave Acquisitions.",
};

export default function TermsPage() {
  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-24 px-6 fade-in">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            LEGAL
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

          <div className="text-gray-600 leading-[1.6] space-y-8">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the websites and services operated by Artifact Media LLC (&quot;Artifact Media,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including the New Wave Press and New Wave Acquisitions brands, and our Sites at{" "}
              <a href="https://newwavepress.co" className="text-gray-900 underline hover:no-underline" target="_blank" rel="noopener noreferrer">newwavepress.co</a>{" "}
              and{" "}
              <a href="https://acquisitionsystems.io" className="text-gray-900 underline hover:no-underline" target="_blank" rel="noopener noreferrer">acquisitionsystems.io</a>.
              By accessing our Sites or submitting an application, you agree to these Terms.
            </p>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">1. Services</h2>
              <p>
                New Wave Acquisitions provides book-based client acquisition infrastructure, including Intellibook technology, AI SDR implementation, CoreText analytics, and related services. Access to these services is application-based and granted at our sole discretion. Submission of an application does not guarantee acceptance or access.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">2. Use of the Sites</h2>
              <p className="mb-3">You agree to use our Sites only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Scrape, copy, or reproduce content from our Sites without written permission</li>
                <li>Misrepresent your identity or qualifications in an application</li>
                <li>Interfere with the operation of our Sites or services</li>
                <li>Use our Sites in any way that violates applicable laws or regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">3. Intellectual Property</h2>
              <p>
                All content on our Sites, including copy, design, product names (Intellibook, CoreText, AI SDR Twin), and methodology, is the property of Artifact Media LLC and may not be reproduced, distributed, or used without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">4. SMS and Communications</h2>
              <p>
                By opting into SMS communications through our Sites or Intellibook-instrumented publications, you consent to receive text messages from Artifact Media LLC. You may opt out at any time by replying STOP. See our Privacy Policy for full details on how we handle communications data.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">5. Disclaimer of Warranties</h2>
              <p>
                Our Sites and services are provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee that our Sites will be uninterrupted, error-free, or free of harmful components.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Artifact Media LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our Sites or services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">7. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Artifact Media LLC and its founders, employees, and advisors from any claims, damages, or expenses arising from your use of our Sites or services, or your violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">9. Changes to These Terms</h2>
              <p>
                We may update these Terms at any time. Continued use of our Sites after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold mb-2">10. Contact</h2>
              <p>
                Artifact Media LLC
              </p>
              <p className="mt-2">
                <a href="mailto:hello@newwavepress.co" className="text-gray-900 underline hover:no-underline">hello@newwavepress.co</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
