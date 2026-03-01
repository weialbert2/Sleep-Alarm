"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function GuaranteeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section bg-brand" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              We are so confident in MAXL ONE that we back every order with a <strong className="text-white">complete satisfaction guarantee</strong>.
              If you are not blown away by the results, contact us for a full refund. No forms. No hassle. No questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#order"
                className="btn-outline-white inline-flex justify-center"
              >
                Get MAXL ONE Risk-Free
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center justify-center text-white/80 font-semibold hover:text-white transition-colors"
              >
                Learn more about our guarantee →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
