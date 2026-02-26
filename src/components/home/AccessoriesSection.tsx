"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { accessoryProducts, bundleProducts } from "@/data/products";

export default function AccessoriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featuredAccessories = [...accessoryProducts, ...bundleProducts].slice(0, 4);

  return (
    <section className="py-section bg-surface-muted" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Complete Your Sleep Routine</h2>
          <p className="section-sub mx-auto">
            Pair your wake-up alarm with our sleep health accessories for deeper, healthier rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featuredAccessories.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <ProductCard product={product} compact />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/collections/all" className="btn-secondary inline-flex">
            Shop All Accessories
          </Link>
        </div>
      </div>
    </section>
  );
}
