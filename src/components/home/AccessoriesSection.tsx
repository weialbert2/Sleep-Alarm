"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const surfaces = [
  { emoji: "🚗", label: "Cars & Trucks", desc: "Paint, clearcoat, glass, chrome, plastic, rubber, leather, vinyl" },
  { emoji: "🏍️", label: "Motorcycles", desc: "Gas tanks, chrome pipes, fenders, fairings, windshields" },
  { emoji: "🚌", label: "RVs & Campers", desc: "Full exterior, fiberglass, awnings, windows, interior surfaces" },
  { emoji: "⛵", label: "Boats", desc: "Fiberglass hull, gelcoat, chrome hardware, vinyl seating, canvas" },
  { emoji: "✈️", label: "Planes", desc: "Fuselage, wings, cockpit glass, aluminum, composite panels" },
  { emoji: "🏠", label: "Home Surfaces", desc: "Granite, stainless steel, chrome fixtures, glass, tile, appliances" },
];

export default function AccessoriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section bg-surface-muted" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Works on Every Surface You Own</h2>
          <p className="section-sub mx-auto">
            MAXL ONE is the only spray you need — for every vehicle, every surface, every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {surfaces.map((surface, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white rounded-card p-5 shadow-card flex items-start gap-4"
            >
              <span className="text-3xl flex-shrink-0">{surface.emoji}</span>
              <div>
                <h3 className="text-sm font-bold text-text-primary mb-1">{surface.label}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{surface.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
