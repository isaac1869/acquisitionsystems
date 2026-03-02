import Button from "@/components/Button";

type PlaybookCTAProps = {
  headline: string;
  subline: string;
};

export default function PlaybookCTA({ headline, subline }: PlaybookCTAProps) {
  return (
    <div className="max-w-2xl mx-auto text-center pt-12 border-t border-gray-200 mt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">
        {headline}
      </h2>
      <p className="text-gray-600 mb-6">{subline}</p>
      <Button href="/apply">Apply for Early Access</Button>
    </div>
  );
}
