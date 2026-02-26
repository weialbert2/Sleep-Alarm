"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const messages = [
  "🚚 FREE SHIPPING ON ORDERS $50+",
  "⭐ 175,000+ Happy Customers",
  "🔄 100-Night Money-Back Guarantee",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-surface-dark text-white h-9 flex items-center justify-center overflow-hidden">
      <Link
        href="/products/100-wake-up-alarm"
        className="text-xs font-medium tracking-widest uppercase text-center px-4 hover:opacity-80 transition-opacity"
      >
        {messages[current]}
      </Link>
    </div>
  );
}
