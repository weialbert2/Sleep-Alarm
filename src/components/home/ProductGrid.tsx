"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const kits = [
  {
    id: "1-kit",
    name: "1 Kit",
    price: 59.97,
    compareAtPrice: 96.78,
    savings: 38,
    contents: [
      "1x MAXL ONE 20oz bottle",
      "2x Microfiber Towels",
    ],
    freeShipping: false,
    popular: false,
  },
  {
    id: "2-kit",
    name: "2 Kit",
    price: 99.97,
    compareAtPrice: 193.56,
    savings: 48,
    contents: [
      "2x MAXL ONE 20oz bottles",
      "4x Microfiber Towels",
    ],
    freeShipping: false,
    popular: false,
  },
  {
    id: "3-kit",
    name: "3 Kit",
    price: 139.97,
    compareAtPrice: 290.34,
    savings: 52,
    contents: [
      "3x MAXL ONE 20oz bottles",
      "6x Microfiber Towels",
      "Free Shipping (lower 48 states)",
    ],
    freeShipping: true,
    popular: false,
  },
  {
    id: "gallon-kit",
    name: "Gallon Kit",
    price: 239.97,
    compareAtPrice: 704.42,
    savings: 66,
    contents: [
      "1x MAXL ONE Gallon container",
      "1x MAXL ONE 20oz bottle",
      "8x Microfiber Towels",
      "Free Shipping (lower 48 states)",
    ],
    freeShipping: true,
    popular: true,
  },
];

function Countdown() {
  const [time, setTime] = useState({ h: 1, m: 47, s: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 1; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-3 justify-center">
      {[
        { label: "HRS", value: pad(time.h) },
        { label: "MIN", value: pad(time.m) },
        { label: "SEC", value: pad(time.s) },
      ].map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3">
          <div className="text-center">
            <div className="bg-surface-dark text-white text-2xl font-black w-14 h-14 rounded-card flex items-center justify-center tabular-nums">
              {unit.value}
            </div>
            <div className="text-[10px] font-bold text-text-muted mt-1 tracking-widest">{unit.label}</div>
          </div>
          {i < 2 && <span className="text-2xl font-black text-brand -mt-4">:</span>}
        </div>
      ))}
    </div>
  );
}

export default function ProductGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="order" className="py-section bg-white" ref={ref}>
      <div className="container-site">
        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-pill mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-black uppercase tracking-widest">Special Offer Ends Soon!</span>
          </div>
          <Countdown />
          <h2 className="section-heading mt-8">Choose Your MAXL ONE Kit</h2>
          <p className="section-sub mx-auto">
            Every kit includes microfiber towels and is backed by our 100% satisfaction guarantee.
          </p>
        </motion.div>

        {/* Kit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {kits.map((kit, i) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative rounded-card border-2 p-6 flex flex-col ${
                kit.popular
                  ? "border-brand shadow-[0_0_0_4px_rgba(230,33,41,0.12)]"
                  : "border-border shadow-card"
              }`}
            >
              {/* Popular badge */}
              {kit.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-white text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-pill whitespace-nowrap">
                  ★ Most Popular
                </div>
              )}

              {/* Savings badge */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-black text-text-primary">{kit.name}</h3>
                <span className="text-[11px] font-black text-white bg-brand px-2 py-0.5 rounded-badge">
                  SAVE {kit.savings}%
                </span>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <div className="text-3xl font-black text-text-primary">
                  ${kit.price.toFixed(2)}
                </div>
                <div className="text-sm text-text-muted line-through">
                  Was ${kit.compareAtPrice.toFixed(2)}
                </div>
              </div>

              {/* Contents */}
              <ul className="space-y-2 mb-6 flex-1">
                {kit.contents.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-text-body">
                    <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full py-3 rounded-btn font-black uppercase tracking-wide text-sm transition-all hover:scale-[1.02] active:scale-[0.99] ${
                kit.popular
                  ? "bg-brand text-white shadow-btn hover:bg-brand-dark"
                  : "bg-yellow text-black hover:bg-yellow-dark"
              }`}>
                BUY NOW
              </button>

              {kit.freeShipping && (
                <p className="text-center text-[11px] text-brand font-bold mt-2">
                  🚚 FREE Shipping Included
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-text-muted"
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure Checkout
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Satisfaction Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Visa · Mastercard · Amex · PayPal · Apple Pay
          </span>
        </motion.div>
      </div>
    </section>
  );
}
