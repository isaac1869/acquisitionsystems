"use client";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "gray";
  id?: string;
};

export default function SectionWrapper({
  children,
  className = "",
  bg = "white",
  id,
}: SectionWrapperProps) {
  const bgClass = bg === "gray" ? "bg-gray-50/60" : "";

  return (
    <section
      id={id}
      className={`reveal py-16 md:py-20 px-6 ${bgClass} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
