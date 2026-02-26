"use client";

import { useState } from "react";
import StarRating from "@/components/ui/StarRating";
import { reviews } from "@/data/reviews";

const ratingBars = [
  { stars: 5, pct: 89 },
  { stars: 4, pct: 7 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

export default function ProductReviews() {
  const [visible, setVisible] = useState(4);

  return (
    <section id="reviews" className="py-section bg-white">
      <div className="container-site">
        <h2 className="section-heading mb-10">Real Reviews from Real Customers</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {/* Summary */}
          <div className="flex flex-col items-center justify-center text-center p-8 bg-surface-muted rounded-card border border-border">
            <span className="text-6xl font-black text-text-primary">4.9</span>
            <StarRating rating={4.9} size="lg" showCount={false} />
            <p className="text-sm text-text-muted mt-2">Based on 65,000+ reviews</p>

            {/* Rating bars */}
            <div className="mt-6 w-full space-y-2">
              {ratingBars.map(({ stars, pct }) => (
                <div key={stars} className="flex items-center gap-2 text-xs">
                  <span className="w-3 text-right text-text-muted">{stars}</span>
                  <svg className="w-3 h-3 text-brand-star flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-star rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-6 text-text-muted">{pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top review */}
          {reviews[0] && (
            <div className="lg:col-span-2 bg-brand-light rounded-card p-6 border border-green-100">
              <div className="flex items-start justify-between mb-3">
                <StarRating rating={reviews[0].rating} size="md" showCount={false} />
                <span className="badge badge-brand">Featured Review</span>
              </div>
              {reviews[0].title && (
                <h4 className="text-base font-bold text-text-primary mb-2">{reviews[0].title}</h4>
              )}
              <p className="text-base text-text-body leading-relaxed mb-4">
                &ldquo;{reviews[0].body}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{reviews[0].author[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{reviews[0].author}</p>
                  <p className="text-xs text-text-muted">{reviews[0].location} · {reviews[0].date}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Review list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {reviews.slice(1, visible).map((review) => (
            <div key={review.id} className="bg-surface-muted rounded-card p-5 border border-border">
              <div className="flex items-start justify-between mb-3">
                <StarRating rating={review.rating} size="sm" showCount={false} />
                {review.verified && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand-light px-2 py-0.5 rounded-badge border border-brand/20">
                    Verified Buyer
                  </span>
                )}
              </div>
              {review.title && (
                <h4 className="text-sm font-bold text-text-primary mb-2">{review.title}</h4>
              )}
              <p className="text-sm text-text-body leading-relaxed mb-4">&ldquo;{review.body}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-border flex items-center justify-center">
                  <span className="text-xs font-bold text-text-muted">{review.author[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-primary">{review.author}</p>
                  <p className="text-[11px] text-text-light">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visible < reviews.length && (
          <div className="text-center">
            <button
              onClick={() => setVisible((v) => v + 4)}
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
