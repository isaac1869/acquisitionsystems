"use client";

import { usePathname } from "next/navigation";

export default function DemoLayoutWrapper({
  children,
  nav,
  footer,
  stickyCta,
  scrollReveal,
}: {
  children: React.ReactNode;
  nav: React.ReactNode;
  footer: React.ReactNode;
  stickyCta: React.ReactNode;
  scrollReveal: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDemo = pathname?.startsWith("/demo");

  if (isDemo) {
    return <>{children}</>;
  }

  return (
    <>
      {nav}
      <main>{children}</main>
      {footer}
      {stickyCta}
      {scrollReveal}
    </>
  );
}
