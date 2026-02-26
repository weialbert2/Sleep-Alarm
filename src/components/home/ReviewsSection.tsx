"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import StarRating from "@/components/ui/StarRating";
import { homepageReviews } from "@/data/reviews";

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [page, setPage] = useState(0);

  const visibleReviews = homepageReviews.slice(page * 3, page * 3 + 3);
  const hasMore = (page + 1) * 3 < homepageReviews.length;

  return (
    <section id="reviews" className="py-section bg-white" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2 className="section-heading">What 65,000+ Customers Are Saying</h2>
        </motion.div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-3">
            <span className="text-5xl font-black text-text-primary">4.9</span>
            <div>
              <StarRating rating={4.9} size="lg" showCount={false} />
              <p className="text-sm text-text-muted mt-0.5">Based on 65,000+ reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {visibleReviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-surface-muted rounded-card p-5 border border-border"
            >
              <div className="flex items-start justify-between mb-3">
                <StarRating rating={review.rating} size="sm" showCount={false} />
                {review.verified && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand-light px-2 py-0.5 rounded-badge">
                    Verified
                  </span>
                )}
              </div>
              {review.title && (
                <h4 className="text-sm font-bold text-text-primary mb-2">{review.title}</h4>
              )}
              <p className="text-sm text-text-body leading-relaxed mb-4 line-clamp-3">
                &ldquo;{review.body}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{review.author[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-primary">{review.author}</p>
                  {review.location && (
                    <p className="text-[11px] text-text-light">{review.location}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="btn-secondary"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
