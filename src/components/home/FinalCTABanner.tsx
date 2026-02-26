"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section bg-surface-dark" ref={ref}>
      <div className="container-site text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stop Sleeping Through Your Life
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-8">
            Join 175,000+ people who never miss their morning. Risk-free for 100 nights.
          </p>
          <Link
            href="/products/100-wake-up-alarm"
            className="btn-primary-lg inline-flex"
          >
            Get Yours — Risk Free
          </Link>
          <p className="text-sm text-white/50 mt-4">
            Free shipping over $50 · 100-night trial · Secure checkout
          </p>
        </motion.div>
      </div>
    </section>
  );
}
