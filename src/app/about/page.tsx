import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/ui/JsonLd";
import { SITE_NAME, LOAN_LIMITS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Brook Loans | Nationwide Direct Lender",
  description:
    "Learn about Brook Loans. We are a direct lender providing $2k-$10k personal loans with a fixed 10% APR to borrowers in all 50 states, regardless of credit score.",
  alternates: { canonical: "/about" },
};

const PILLARS = [
  {
    title: "Universal Acceptance",
    description:
      "We believe your financial future is more than a three-digit number. We accept applicants across all credit score ranges.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Radical Transparency",
    description:
      "No hidden fees, no variable rates. Every borrower receives the exact same fixed 10% APR.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Human-First Underwriting",
    description:
      "We do not rely solely on automated algorithms. You speak directly with our underwriting and funding teams to finalize your loan.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Our Mission: Transparent Financing for Everyone
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {SITE_NAME} was founded on a simple principle: borrowing money
            should not be complicated. We are a direct lender serving all 50
            states, committed to removing the barriers that traditional banks
            put in place.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary text-center mb-14">
            Why Choose {SITE_NAME}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-8 shadow-md border border-surface-dark"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-surface py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">
                ${LOAN_LIMITS.minAmount.toLocaleString()}&ndash;$
                {LOAN_LIMITS.maxAmount.toLocaleString()}
              </p>
              <p className="text-sm text-text-secondary mt-1">Loan Amounts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">
                {LOAN_LIMITS.minAPR}%
              </p>
              <p className="text-sm text-text-secondary mt-1">Fixed APR</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">All</p>
              <p className="text-sm text-text-secondary mt-1">
                Credit Scores Accepted
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50</p>
              <p className="text-sm text-text-secondary mt-1">
                U.S. States Served
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Apply online in minutes, then call to complete underwriting and
            e-sign your agreement.
          </p>
          <Link
            href="/apply"
            prefetch={false}
            className="mt-8 bg-secondary hover:bg-secondary-light text-primary-dark px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}
