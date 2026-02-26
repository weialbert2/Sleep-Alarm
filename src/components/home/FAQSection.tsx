"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { homeFAQs } from "@/data/faqs";

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-section bg-white" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-sub mx-auto">
            Everything you need to know before you buy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-prose mx-auto border border-border rounded-card px-6"
        >
          <FAQAccordion faqs={homeFAQs} />
        </motion.div>
      </div>
    </section>
  );
}
