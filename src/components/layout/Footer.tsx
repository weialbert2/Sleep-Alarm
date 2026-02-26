import Link from "next/link";

const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { label: "100% Wake-Up Alarm", href: "/products/100-wake-up-alarm" },
      { label: "Pro Version", href: "/products/100-wake-up-alarm-pro-version-copy" },
      { label: "Sleep Accessories", href: "/collections/all" },
      { label: "All Products", href: "/collections/all" },
      { label: "Gift Cards", href: "/products/fitsleeps-gift-card" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Shipping Info", href: "/pages/shipping" },
      { label: "Returns & Refunds", href: "/pages/returns" },
      { label: "Contact Us", href: "/pages/contact" },
      { label: "Track Your Order", href: "/pages/track" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About FitSleeps", href: "/pages/about" },
      { label: "Blog", href: "/blogs/news" },
      { label: "Reviews", href: "/#reviews" },
      { label: "Affiliates", href: "/pages/affiliates" },
      { label: "Press & Media", href: "/pages/press" },
    ],
  },
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/fitsleeps",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@fitsleeps",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.28 8.28 0 004.85 1.55V6.89a4.85 4.85 0 01-1.08-.2z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/fitsleeps",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@fitsleeps",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const paymentIcons = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Shop Pay"];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      {/* Newsletter */}
      <div className="bg-[#1A1A1A] border-b border-[#333]">
        <div className="container-site py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Wake Up Better, Starting Now</h3>
              <p className="text-sm text-[#aaa]">Get sleep tips, product updates, and exclusive offers.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto md:min-w-[360px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-btn bg-[#2A2A2A] border border-[#444] text-white placeholder-[#666] text-sm focus:outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-brand text-white font-semibold text-sm rounded-btn hover:bg-brand-dark transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-0.5 text-xl font-bold mb-4">
              <span className="text-white">Fit</span>
              <span className="text-brand">Sleeps</span>
              <span className="text-brand text-xs align-super">®</span>
            </Link>
            <p className="text-sm text-[#aaa] leading-relaxed mb-6">
              Better sleep. Better mornings.
              <br />
              Trusted by 175,000+ deep sleepers worldwide.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-[#444] flex items-center justify-center text-[#aaa] hover:text-white hover:border-brand transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#aaa] hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#333]">
        <div className="container-site py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-[#666]">
            © {new Date().getFullYear()} FitSleeps. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((label) => (
              <Link
                key={label}
                href={`/pages/${label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs text-[#666] hover:text-[#aaa] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-2">
            {paymentIcons.map((name) => (
              <span
                key={name}
                className="text-[9px] font-bold text-[#444] border border-[#444] rounded px-1.5 py-0.5"
              >
                {name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
