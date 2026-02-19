"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";

const REVENUE_OPTIONS = [
  { value: "under-100k", label: "Under $100k" },
  { value: "100k-500k", label: "$100k–$500k" },
  { value: "500k-1m", label: "$500k–$1M" },
  { value: "1m-5m", label: "$1M–$5M" },
  { value: "5m-plus", label: "$5M+" },
];

const PRICE_OPTIONS = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000–$5,000" },
  { value: "5k-15k", label: "$5,000–$15,000" },
  { value: "15k-50k", label: "$15,000–$50,000" },
  { value: "50k-plus", label: "$50,000+" },
];

const CATEGORIES = [
  { id: "health", label: "Health" },
  { id: "wealth", label: "Wealth" },
  { id: "business", label: "Business" },
  { id: "mindset", label: "Mindset" },
  { id: "fitness", label: "Fitness" },
];

type FormState = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  annualRevenue: string;
  category: string[];
  offerPricePoint: string;
  describeService: string;
};

const initial: FormState = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  companyName: "",
  companyWebsite: "",
  annualRevenue: "",
  category: [],
  offerPricePoint: "",
  describeService: "",
};

export default function ApplyPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const update = (name: keyof FormState, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const toggleCategory = (id: string) => {
    setForm((prev) => ({
      ...prev,
      category: prev.category.includes(id)
        ? prev.category.filter((c) => c !== id)
        : [...prev.category, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const required = [
      form.firstName,
      form.lastName,
      form.mobile,
      form.email,
      form.companyName,
      form.annualRevenue,
      form.offerPricePoint,
      form.describeService,
    ];
    if (required.some((v) => !v?.trim())) {
      setError("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }
    if (form.category.length === 0) {
      setError("Please select at least one category.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          mobile: form.mobile.trim(),
          email: form.email.trim(),
          companyName: form.companyName.trim(),
          companyWebsite: form.companyWebsite.trim() || undefined,
          annualRevenue: form.annualRevenue,
          category: form.category,
          offerPricePoint: form.offerPricePoint,
          describeService: form.describeService.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      router.push("/thank-you");
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-8 px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            APPLICATION
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.08] mb-6">
            Apply for early access.
          </h1>
          <p className="text-lg text-gray-600 leading-[1.55]">
            We work with a limited number of businesses each quarter. Tell us
            about yours.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField
                label="First Name"
                name="firstName"
                required
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
              />
              <FormField
                label="Last Name"
                name="lastName"
                required
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
              />
            </div>
            <FormField
              label="Mobile Phone"
              name="mobile"
              type="tel"
              required
              value={form.mobile}
              onChange={(e) => update("mobile", e.target.value)}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
            <FormField
              label="Company Name"
              name="companyName"
              required
              value={form.companyName}
              onChange={(e) => update("companyName", e.target.value)}
            />
            <FormField
              label="Company Website"
              name="companyWebsite"
              type="url"
              placeholder="https://"
              value={form.companyWebsite}
              onChange={(e) => update("companyWebsite", e.target.value)}
            />
            <FormField
              label="Annual Gross Revenue"
              name="annualRevenue"
              as="select"
              required
              options={REVENUE_OPTIONS}
              value={form.annualRevenue}
              onChange={(e) => update("annualRevenue", e.target.value)}
            />
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">
                Category <span className="text-red-500">*</span>
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Select all that apply.
              </p>
              <div className="flex flex-wrap gap-4">
                {CATEGORIES.map((c) => (
                  <label key={c.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="category"
                      value={c.id}
                      checked={form.category.includes(c.id)}
                      onChange={() => toggleCategory(c.id)}
                      className="w-4 h-4 rounded border-gray-300 text-electric-cyan focus:ring-electric-cyan"
                    />
                    <span className="text-sm text-gray-700">{c.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <FormField
              label="Primary Offer Price Point"
              name="offerPricePoint"
              as="select"
              required
              options={PRICE_OPTIONS}
              value={form.offerPricePoint}
              onChange={(e) => update("offerPricePoint", e.target.value)}
            />
            <FormField
              label="Describe Your Service"
              name="describeService"
              as="textarea"
              required
              rows={4}
              placeholder="A few sentences about what you do and who you serve."
              value={form.describeService}
              onChange={(e) => update("describeService", e.target.value)}
            />
            {error && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}
            <Button
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
