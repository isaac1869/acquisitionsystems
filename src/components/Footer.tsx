import Link from "next/link";

const pages = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-semibold text-gray-900 mb-2">
            New Wave Acquisitions
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Book-based acquisition infrastructure for high-ticket service
            businesses.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Pages
          </p>
          <ul className="space-y-2 text-sm">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Contact
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <a
              href="mailto:hello@newwavepress.co"
              className="hover:text-gray-900"
            >
              hello@newwavepress.co
            </a>
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-gray-600">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-600">
              Terms
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          © 2026 New Wave Acquisitions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
