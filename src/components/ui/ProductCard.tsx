"use client";

import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";
import type { Product } from "@/types";

const badgeColorMap: Record<string, string> = {
  brand: "bg-brand text-white",
  dark: "bg-surface-dark text-white",
  alert: "bg-alert-red text-white",
  outline: "bg-brand-light text-brand border border-brand",
};

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const discount =
    product.compareAtPrice && product.compareAtPrice > product.price
      ? Math.round(
          ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
        )
      : null;

  const badgeClass = product.badgeColor
    ? badgeColorMap[product.badgeColor]
    : "bg-brand text-white";

  return (
    <div className="group bg-white border border-border rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200">
      {/* Image */}
      <Link href={`/products/${product.handle}`} className="block">
        <div className="relative aspect-square bg-surface-muted overflow-hidden">
          {product.images?.[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-border">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          )}

          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-badge ${badgeClass}`}
            >
              {product.badge}
            </span>
          )}

          {/* Discount */}
          {discount && discount > 0 && (
            <span className="absolute top-2.5 right-2.5 bg-alert-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-badge">
              -{discount}%
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className={compact ? "p-3" : "p-4"}>
        <Link href={`/products/${product.handle}`}>
          <h3 className="text-sm font-semibold text-text-primary leading-snug line-clamp-2 hover:text-brand transition-colors">
            {product.name}
          </h3>
        </Link>

        <StarRating rating={product.rating} count={product.reviewCount} size="sm" />

        {!compact && product.shortDescription && (
          <p className="text-xs text-text-muted mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-2.5">
          <span className="text-base font-bold text-brand">
            ${product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-text-light line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/products/${product.handle}`}
          className="mt-3 block w-full text-center py-2.5 text-sm font-semibold rounded-btn bg-brand text-white hover:bg-brand-dark transition-colors duration-200"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
