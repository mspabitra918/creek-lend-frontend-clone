import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/ui/JsonLd";
import {
  SITE_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  LOAN_LIMITS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "How to Get a Personal Loan Fast | Brook Loans Process",
  },
  description:
    "Learn how the Brook Loans 3-step process works. Apply online, call for instant underwriting and e-signature, and get your funds within 24 hours.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    step: "1",
    title: "Apply Online",
    action:
      "Fill out our secure, basic online application form to establish your profile and requested loan amount.",
    timeline: "5 Minutes",
    details: [
      <>
        <strong>100% Online</strong>&mdash;no paperwork, no faxing, no hassle
      </>,
      <>
        <strong>$0 Upfront Fees</strong>&mdash;no application or processing costs
      </>,
      <>
        <strong>All Credit Scores Accepted</strong>&mdash;no minimum score
        required
      </>,
      <>
        <strong>Available Nationwide</strong>&mdash;residents of all 50 U.S.
        states
      </>,
    ],
    icon: (
      <svg
        className="w-24 h-24 text-primary mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    caption: "Secure Online Application",
  },
  {
    step: "2",
    title: "Call for Underwriting",
    action: `Call our team at ${BUSINESS_PHONE}. We will transfer you to underwriting to review your terms and e-sign your agreement.`,
    timeline: "Immediate upon calling",
    details: [
      <>
        <strong>Human-First Underwriting</strong>&mdash;you speak directly with
        our team
      </>,
      <>
        <strong>Fixed {LOAN_LIMITS.minAPR}% APR</strong>&mdash;the same rate for
        every borrower
      </>,
      <>
        <strong>E-Sign by Phone</strong>&mdash;review and sign your agreement on
        the call
      </>,
      <>
        <strong>No Prepayment Penalty</strong>&mdash;pay off early at any time
      </>,
    ],
    icon: (
      <svg
        className="w-24 h-24 text-primary mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    caption: "Live Phone Underwriting",
  },
  {
    step: "3",
    title: "Receive Your Funds",
    action:
      "Your call is transferred to funding for final processing. Funds are sent to your account.",
    timeline: "Within 24 Hours",
    details: [
      <>
        <strong>Direct Deposit</strong> to any U.S.-based bank account
      </>,
      <>
        <strong>24-Hour Disbursal</strong>&mdash;measured from your e-signature
      </>,
      <>
        <strong>$0 Origination Fee</strong>&mdash;you receive the full amount
        approved
      </>,
      <>
        <strong>Ongoing Support</strong>&mdash;our team is available during
        business hours
      </>,
    ],
    icon: (
      <svg
        className="w-24 h-24 text-primary mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    caption: "Funds Deposited",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "How It Works", url: "/how-it-works" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Get Funded in 3 Simple Steps
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            We have streamlined our approval process to get your funds disbursed
            quickly and securely.
          </p>
        </div>
      </section>

      {/* Process Table */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md border border-surface-dark overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <caption className="sr-only">
                  The {SITE_NAME} three-step loan process
                </caption>
                <thead className="bg-surface">
                  <tr>
                    <th
                      scope="col"
                      className="text-left px-6 py-4 text-sm font-semibold text-text-primary"
                    >
                      Step
                    </th>
                    <th
                      scope="col"
                      className="text-left px-6 py-4 text-sm font-semibold text-text-primary"
                    >
                      Action Required
                    </th>
                    <th
                      scope="col"
                      className="text-left px-6 py-4 text-sm font-semibold text-text-primary whitespace-nowrap"
                    >
                      Timeline
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-dark">
                  {STEPS.map((item) => (
                    <tr key={item.step}>
                      <th
                        scope="row"
                        className="text-left px-6 py-4 text-sm text-text-primary font-medium whitespace-nowrap"
                      >
                        {item.step}. {item.title}
                      </th>
                      <td className="px-6 py-4 text-sm text-text-secondary">
                        {item.action}
                      </td>
                      <td className="px-6 py-4 text-sm text-text-secondary whitespace-nowrap">
                        {item.timeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Steps in detail */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {STEPS.map((item, index) => (
              <div
                key={item.step}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </span>
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">
                      {item.timeline}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-text-primary mb-4">
                    {item.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {item.action}
                  </p>
                  <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-text-secondary"
                      >
                        <svg
                          className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-surface rounded-2xl p-8 flex items-center justify-center min-h-[280px] ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div className="text-center">
                    {item.icon}
                    <p className="text-primary font-semibold mt-4">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Banner */}
      <section className="bg-surface py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-text-primary font-semibold">
                Funded Within 24 Hours
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <p className="text-text-primary font-semibold">
                Zero Upfront Fees
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-text-primary font-semibold">
                Serving All 50 US States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Start?</h2>
          <p className="mt-4 text-white/80 text-lg">
            Step 1 takes about 5 minutes. Step 2 is a phone call away.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              prefetch={false}
              className="bg-secondary hover:bg-secondary-light text-primary-dark px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-block"
            >
              Apply Now
            </Link>
            <a
              href={`tel:${BUSINESS_PHONE_TEL}`}
              aria-label={`Call ${SITE_NAME} at ${BUSINESS_PHONE}`}
              className="border-2 border-white/30 hover:border-white/60 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
            >
              Call {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
