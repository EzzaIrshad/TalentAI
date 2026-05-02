"use client";

import TitleBadge from "@/ui/components/badge/title-badge";
import PrimaryButton from "@/ui/components/buttons/primary-button";
import { motion } from "motion/react";
import { useState } from "react";

const PRICING_DATA = {
    monthly: {
        free: { price: "Free", period: "" },
        pro: { price: "$20", period: "/month" },
        premium: { price: "$35", period: "/month" },
    },
    yearly: {
        free: { price: "Free", period: "" },
        pro: { price: "$200", period: "/year" },
        premium: { price: "$350", period: "/year" },
    },
};

export default function Pricing() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
        "monthly"
    );

    const pricing = PRICING_DATA[billingPeriod];

    const CONTENT = {
        headline: "Simple pricing for smarter job hunting",
        subheadline: "Start free. Upgrade when you're ready to accelerate your career.",
        plans: [
            {
                name: "Free",
                price: pricing.free.price,
                period: pricing.free.period,
                description: "Perfect for new users testing the platform",
                features: [
                    "Limited resume generation (2–3)",
                    "Basic AI suggestions",
                    "Limited job matches",
                    "Access to core features",
                ],
                cta: { label: "Get Started", href: "/signup" },
                highlight: false,
            },
            {
                name: "Pro",
                price: pricing.pro.price,
                period: pricing.pro.period,
                description: "For serious job seekers",
                features: [
                    "Unlimited resumes & cover letters",
                    "Advanced AI suggestions",
                    "Smart job match recommendations",
                    "Interview preparation tools",
                    "ATS score insights",
                ],
                cta: { label: "Upgrade to Pro", href: "/pricing" },
                highlight: true,
            },
            {
                name: "Premium",
                price: pricing.premium.price,
                period: pricing.premium.period,
                description: "For organizations with specific requirements.",
                features: [
                    "Everything in Pro",
                    "Priority AI processing",
                    "Personalized career insights",
                    "Advanced analytics dashboard",
                    "Early access to new features",
                ],
                cta: { label: "Contact Sales", href: "/contact" },
                highlight: false,
            },
        ],
    } as const;
    return (
        <section className="section-container py-10 lg:py-20'">
            <div className="w-full max-w-300 mx-auto px-5">
                {/* Header */}
                <div className="flex flex-col items-center md:px-13.5 md:gap-4.5">
                    <TitleBadge text="Pricing" />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-[clamp(26px,4vw,42px)] text-center max-w-140 font-medium"
                    >
                        {CONTENT.headline}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        className="text-sm lg:text-md 2xl:text-lg text-center max-w-md mb-2.5 text-muted-foreground">
                        {CONTENT.subheadline}
                    </motion.p>
                    {/* Billing Toggle */}
                    <div
                        className="mx-auto inline-flex rounded-full p-1 mt-8 mb-15 bg-[#e9eaec]"

                    >
                        <button
                            onClick={() => setBillingPeriod("monthly")}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${billingPeriod === "monthly"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingPeriod("yearly")}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${billingPeriod === "yearly"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600"
                                }`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-10">
                {CONTENT.plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex flex-col p-8 rounded-2xl border ${plan.highlight
                            ? "bg-gray-900 border-gray-800 text-white shadow-xl"
                            : "bg-white border-gray-200 text-gray-900 shadow-lg"
                            }`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-6">
                            <h3
                                className={`text-xl font-medium mb-2 ${plan.highlight ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1">
                                <span
                                    className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"
                                        }`}
                                >
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span
                                        className={`text-base ${plan.highlight ? "text-gray-300" : "text-gray-500"
                                            }`}
                                    >
                                        {plan.period}
                                    </span>
                                )}
                            </div>
                            <p
                                className={`mt-3 text-sm ${plan.highlight ? "text-gray-300" : "text-gray-500"
                                    }`}
                            >
                                {plan.description}
                            </p>
                        </div>

                        <ul className="flex-1 space-y-3 mb-8">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                    <svg
                                        className={`w-5 h-5 mt-0.5 shrink-0 ${plan.highlight ? "text-blue-400" : "text-blue-600"
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span
                                        className={`text-sm ${plan.highlight ? "text-gray-300" : "text-gray-600"
                                            }`}
                                    >
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <PrimaryButton
                            text={plan.cta.label}
                            bgColor={plan.highlight
                                ? "white"
                                : "linear-gradient(270deg, #434343, #000)"
                                }
                            textColor={plan.highlight ? "black" : "white"}
                            link={plan.cta.href}
                        />

                    </motion.div>
                ))}
            </div>
        </section >
    );
}