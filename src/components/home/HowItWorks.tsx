"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Spray MAXL ONE",
    desc: "Lightly mist MAXL ONE directly onto any surface — paint, glass, chrome, plastic, leather, or rubber. A little goes a long way.",
    icon: "💧",
  },
  {
    step: "02",
    title: "Wipe with Microfiber Towel",
    desc: "Using your included microfiber towel, gently wipe the surface in circular motions. Watch dirt, grime, and water spots disappear instantly.",
    icon: "✨",
  },
  {
    step: "03",
    title: "Admire the Shine",
    desc: "Step back and enjoy a deep, mirror-like shine with long-lasting hydrophobic protection — done in minutes, from your driveway.",
    icon: "🏆",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-section bg-surface-muted" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">How It Works in 3 Simple Steps</h2>
          <p className="section-sub mx-auto">
            No buckets. No hoses. No car wash lines. Just spray, wipe, and shine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-brand-light" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Step number circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-brand flex items-center justify-center shadow-btn mb-6">
                <span className="text-2xl">{step.icon}</span>
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-surface-dark text-white text-[10px] font-black rounded-full flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-base font-bold text-text-primary mb-2">{step.title}</h3>
              <p className="text-sm text-text-body leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
