"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StarRating from "@/components/ui/StarRating";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="bg-white min-h-[580px] flex items-center py-16 lg:py-20">
      <div className="container-site w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-3 py-1.5 rounded-pill mb-5">
                ★ 175,000+ Happy Customers
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[2.1rem] md:text-[2.6rem] lg:text-[2.75rem] font-bold text-text-primary leading-[1.15] mb-5 tracking-tight"
            >
              Finally. An Alarm That{" "}
              <span className="text-brand">Guarantees</span> You Wake Up.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-text-body leading-relaxed max-w-md mb-8"
            >
              The silent vibrating wristband alarm that wakes only you — not your
              whole house. Used by 175,000+ deep sleepers worldwide.
            </motion.p>

            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/products/100-wake-up-alarm"
                className="btn-primary-lg text-center"
              >
                Shop Now — 100-Night Trial
              </Link>
              <Link
                href="#how-it-works"
                className="btn-secondary text-center"
              >
                See How It Works
              </Link>
            </motion.div>

            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-2">
              <StarRating rating={4.9} size="md" showCount={false} />
              <span className="text-sm font-medium text-text-body">
                <strong className="text-text-primary">4.9/5</strong> from 65,000+ verified reviews
              </span>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[480px]">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-surface-muted">
                <Image
                  src="/images/alarm-hero.jpg"
                  alt="FitSleeps 100% Wake-Up Alarm — worn on wrist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-card shadow-card p-3 flex items-center gap-2.5 max-w-[180px]">
                <div className="w-9 h-9 rounded-full bg-brand-light flex-shrink-0 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-text-primary">100-Night Guarantee</p>
                  <p className="text-[10px] text-text-muted">Full refund if it fails</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
