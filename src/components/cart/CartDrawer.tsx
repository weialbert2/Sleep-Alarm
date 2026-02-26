"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCartStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const sub = subtotal();
  const freeShippingThreshold = 50;
  const remaining = Math.max(0, freeShippingThreshold - sub);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[400px] bg-white z-50 flex flex-col shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-base font-bold text-text-primary">
            Your Cart ({items.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button onClick={closeCart} className="p-1 text-text-muted hover:text-text-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Free shipping bar */}
        {remaining > 0 && (
          <div className="px-5 py-3 bg-brand-light text-sm text-brand-dark font-medium">
            Add <strong>${remaining.toFixed(2)}</strong> more for FREE shipping!
          </div>
        )}
        {remaining === 0 && sub > 0 && (
          <div className="px-5 py-3 bg-brand-light text-sm text-brand font-medium">
            ✓ You qualify for free shipping!
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <svg className="w-12 h-12 text-border" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272" />
              </svg>
              <p className="text-text-muted text-sm">Your cart is empty</p>
              <Link href="/collections/all" onClick={closeCart} className="btn-primary text-sm py-2.5 px-6">
                Start Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-3 pb-4 border-b border-border last:border-0">
                <div className="relative w-16 h-16 rounded-card bg-surface-muted flex-shrink-0 overflow-hidden">
                  {item.product.images?.[0] && (
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text-primary leading-snug line-clamp-2">
                    {item.product.name}
                  </p>
                  <p className="text-sm font-bold text-brand mt-0.5">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-border rounded-btn overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-text-muted hover:bg-surface-muted"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-text-muted hover:bg-surface-muted"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-xs text-text-light hover:text-alert-red transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-5 border-t border-border space-y-3">
            <div className="flex justify-between text-base font-bold text-text-primary">
              <span>Subtotal</span>
              <span>${sub.toFixed(2)}</span>
            </div>
            <p className="text-xs text-text-muted text-center">
              Taxes and shipping calculated at checkout
            </p>
            <button className="btn-primary-lg w-full text-center">
              Checkout — ${sub.toFixed(2)}
            </button>
            <button onClick={closeCart} className="w-full text-center text-sm text-text-muted hover:text-text-body py-1.5 transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
