"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  "Expensive — $15 to $50 per visit, every week",
  "Harsh brushes leave swirl marks and scratches",
  "Strips wax and protective coatings",
  "Takes hours of your time",
  "Zero lasting protection — back to square one next week",
];

const solutions = [
  "One purchase — saves hundreds vs. car washes",
  "Applied gently by hand with microfiber towel",
  "Leaves a deep, long-lasting protective layer",
  "Done in minutes from your driveway",
  "24/7 shine and protection that keeps working",
];

function CheckIcon({ bad }: { bad?: boolean }) {
  return bad ? (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
      <svg className="w-3 h-3 text-alert-red" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </span>
  ) : (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-light flex items-center justify-center">
      <svg className="w-3 h-3 text-brand" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
  );
}

export default function ProblemSolution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section bg-white" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Why the Car Wash Is Costing You More Than Money</h2>
          <p className="section-sub mx-auto">
            Traditional car washes were designed for speed, not for your vehicle. Here&apos;s what they don&apos;t tell you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-red-50 rounded-card p-6 border border-red-100"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">😩</span>
              <h3 className="text-base font-bold text-text-primary">Traditional Car Wash</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon bad />
                  <span className="text-sm text-text-body">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-light rounded-card p-6 border border-red-100"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">✨</span>
              <h3 className="text-base font-bold text-text-primary">MAXL ONE Spray</h3>
            </div>
            <ul className="space-y-3">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm text-text-body">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
