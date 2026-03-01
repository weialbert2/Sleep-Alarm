"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import StarRating from "@/components/ui/StarRating";

const vehicles = ["Car", "Truck", "Motorcycle", "RV", "Boat", "Plane"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  const [vehicleIdx, setVehicleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVehicleIdx((i) => (i + 1) % vehicles.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-surface-dark text-white min-h-[580px] flex items-center py-16 lg:py-20">
      <div className="container-site w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-black bg-yellow px-3 py-1.5 rounded-pill mb-6">
              ★ Special Offer Ends Soon — Save Up to 66%!
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.1] mb-4 tracking-tight"
          >
            Never Wash Your{" "}
            <span className="inline-block relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={vehicleIdx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-brand"
                >
                  {vehicles[vehicleIdx]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Again!
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-4"
          >
            Make everything look <strong className="text-yellow">NEW 24/7</strong>, effortlessly!
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-8"
          >
            The all-purpose, multi-surface, clean, shine, and protect spray — so everything looks NEW again.
          </motion.p>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href="#order"
              className="btn-yellow-lg text-center text-lg font-black uppercase tracking-wide"
            >
              GET YOURS NOW
            </Link>
            <Link
              href="#how-it-works"
              className="btn-outline-white text-center"
            >
              See How It Works
            </Link>
          </motion.div>

          <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <StarRating rating={4.9} size="md" showCount={false} />
              <span className="text-sm font-medium text-white/80">
                <strong className="text-white">4.9/5</strong> from 5,000+ reviews
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-white/70">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-white/70">100% Satisfaction Guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
