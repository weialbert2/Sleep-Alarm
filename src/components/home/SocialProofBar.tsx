const items = [
  {
    icon: "⭐",
    stat: "4.9 / 5",
    label: "5,000+ Verified Reviews",
  },
  {
    icon: "🛡",
    stat: "100%",
    label: "Satisfaction Guarantee",
  },
  {
    icon: "🚚",
    stat: "Free Shipping",
    label: "On 3-Kit & Gallon Orders",
  },
  {
    icon: "🔒",
    stat: "Secure",
    label: "Checkout",
  },
];

export default function SocialProofBar() {
  return (
    <section className="bg-surface-muted border-y border-border">
      <div className="container-site py-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-text-primary">{item.stat}</span>
                <span className="text-sm text-text-muted hidden sm:inline">—</span>
                <span className="text-sm text-text-muted hidden sm:inline">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
