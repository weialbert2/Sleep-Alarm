"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const messages = [
  "🔥 SPECIAL OFFER ENDS SOON — Save Up to 66%!",
  "🚚 FREE SHIPPING on 3-Kit & Gallon Kit Orders",
  "⭐ Trusted by Thousands of Vehicle Owners",
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
    <div className="bg-brand text-white h-9 flex items-center justify-center overflow-hidden">
      <Link
        href="#order"
        className="text-xs font-bold tracking-widest uppercase text-center px-4 hover:opacity-80 transition-opacity"
      >
        {messages[current]}
      </Link>
    </div>
  );
}
