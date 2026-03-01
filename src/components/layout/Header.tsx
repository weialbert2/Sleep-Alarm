"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

const navLinks = [
  { label: "Shop", href: "#order" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/pages/contact" },
];

function CartIcon() {
  const totalItems = useCartStore((s) => s.totalItems);
  const openCart = useCartStore((s) => s.openCart);
  const count = totalItems();

  return (
    <button
      onClick={openCart}
      className="relative p-2 text-text-primary hover:text-brand transition-colors"
      aria-label={`Cart (${count} items)`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand text-white text-[9px] font-bold rounded-full flex items-center justify-center">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-nav" : "border-b border-border"
      }`}
    >
      <div className="container-site h-16 flex items-center justify-between">
        {/* Mobile: Hamburger */}
        <button
          className="lg:hidden p-2 -ml-2 text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 text-xl font-bold text-text-primary hover:text-brand transition-colors"
        >
          <span className="text-brand">MAXL</span>
          <span className="text-surface-dark">ONE</span>
          <span className="text-brand text-xs align-super">®</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-text-body hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1">
          <Link
            href="#order"
            className="hidden lg:inline-flex btn-primary text-sm px-4 py-2"
          >
            GET YOURS NOW
          </Link>
          <CartIcon />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white animate-fade-in">
          <nav className="container-site py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium text-text-body hover:text-brand border-b border-border last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
