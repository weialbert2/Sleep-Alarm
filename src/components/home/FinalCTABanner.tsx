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
            Never Wash Your Vehicle Again
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-8">
            Join thousands of vehicle owners who have discovered the effortless way to keep everything looking NEW. Save up to 66% today.
          </p>
          <Link
            href="#order"
            className="btn-yellow-lg inline-flex font-black uppercase tracking-wide"
          >
            GET YOURS NOW
          </Link>
          <p className="text-sm text-white/50 mt-4">
            Free shipping on 3-Kit &amp; Gallon orders · 100% satisfaction guarantee · Secure checkout
          </p>
        </motion.div>
      </div>
    </section>
  );
}
