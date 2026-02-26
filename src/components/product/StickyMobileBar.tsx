"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types";

interface StickyMobileBarProps {
  product: Product;
  atcButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export default function StickyMobileBar({ product, atcButtonRef }: StickyMobileBarProps) {
  const [visible, setVisible] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (atcButtonRef.current) observer.observe(atcButtonRef.current);
    return () => observer.disconnect();
  }, [atcButtonRef]);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-sticky border-t border-border px-4 py-3 flex items-center gap-3 animate-slide-up">
      {/* Product image */}
      <div className="relative w-10 h-10 rounded flex-shrink-0 overflow-hidden bg-surface-muted">
        {product.images?.[0] && (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-text-primary line-clamp-1">{product.name}</p>
        <p className="text-sm font-bold text-brand">${product.price.toFixed(2)}</p>
      </div>

      {/* ATC */}
      <button
        onClick={() => addItem(product)}
        className="flex-shrink-0 h-11 px-5 bg-brand text-white font-bold text-sm rounded-btn shadow-btn hover:bg-brand-dark transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}
