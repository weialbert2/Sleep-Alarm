"use client";

import { useState } from "react";
import Link from "next/link";
import StarRating from "@/components/ui/StarRating";
import TrustBadges from "@/components/ui/TrustBadges";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

const badgeColorMap: Record<string, string> = {
  brand: "bg-brand text-white",
  dark: "bg-surface-dark text-white",
  alert: "bg-alert-red text-white",
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const discount =
    product.compareAtPrice && product.compareAtPrice > product.price
      ? Math.round(
          ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
        )
      : null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-text-muted">
        <Link href="/" className="hover:text-brand">Home</Link>
        <span>/</span>
        <Link href="/collections/all" className="hover:text-brand">Shop</Link>
        <span>/</span>
        <span className="text-text-primary font-medium line-clamp-1">{product.name}</span>
      </nav>

      {/* Badge */}
      {product.badge && (
        <span className={`self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-pill ${badgeColorMap[product.badgeColor ?? "brand"]}`}>
          {product.badge}
        </span>
      )}

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <StarRating rating={product.rating} count={product.reviewCount} size="md" />
        <a href="#reviews" className="text-sm text-brand hover:underline">
          Read all reviews
        </a>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 py-3 border-y border-border">
        <span className="text-3xl font-black text-brand">${product.price.toFixed(2)}</span>
        {product.compareAtPrice && (
          <span className="text-lg text-text-light line-through">
            ${product.compareAtPrice.toFixed(2)}
          </span>
        )}
        {discount && (
          <span className="ml-1 bg-alert-red text-white text-xs font-bold px-2 py-0.5 rounded-badge">
            SAVE {discount}%
          </span>
        )}
      </div>

      {/* Short desc */}
      {product.shortDescription && (
        <p className="text-base text-text-body leading-relaxed">{product.shortDescription}</p>
      )}

      {/* Feature bullets */}
      {product.features && (
        <ul className="space-y-2">
          {product.features.slice(0, 5).map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-body">
              <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Quantity */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-text-primary">Quantity:</span>
        <div className="flex items-center border border-border rounded-btn overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-text-muted hover:bg-surface-muted transition-colors text-lg font-medium"
          >
            −
          </button>
          <span className="w-10 text-center text-base font-semibold text-text-primary">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center text-text-muted hover:bg-surface-muted transition-colors text-lg font-medium"
          >
            +
          </button>
        </div>
      </div>

      {/* ATC Button */}
      <div className="flex flex-col gap-3">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full h-14 flex items-center justify-center font-bold text-base rounded-btn transition-all duration-200 ${
            added
              ? "bg-brand-dark text-white scale-[0.99]"
              : product.inStock
              ? "bg-brand text-white shadow-btn hover:bg-brand-dark hover:scale-[1.01] active:scale-[0.99]"
              : "bg-border text-text-light cursor-not-allowed"
          }`}
        >
          {added ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Added to Cart!
            </span>
          ) : product.inStock ? (
            `Add to Cart — $${(product.price * quantity).toFixed(2)}`
          ) : (
            "Out of Stock"
          )}
        </button>

        <button className="w-full h-12 border-2 border-border rounded-btn font-semibold text-sm text-text-body hover:border-brand hover:text-brand transition-colors">
          Buy Now
        </button>
      </div>

      {/* Trust badges */}
      <div className="pt-2 border-t border-border">
        <TrustBadges variant="grid" />
      </div>

      {/* Shipping note */}
      <div className="bg-brand-light rounded-btn px-4 py-3 flex items-center gap-2 text-sm">
        <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        <span className="text-brand font-medium">Order today — ships within 1 business day</span>
      </div>
    </div>
  );
}
