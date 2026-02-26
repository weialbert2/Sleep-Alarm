const badges = [
  {
    icon: (
      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Secure Checkout",
    sub: "SSL encrypted",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "100-Night Returns",
    sub: "Risk-free trial",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Free Shipping $50+",
    sub: "Fast delivery",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "In Stock & Ships Today",
    sub: "Order by 2PM",
  },
];

interface TrustBadgesProps {
  variant?: "row" | "grid";
}

export default function TrustBadges({ variant = "row" }: TrustBadgesProps) {
  return (
    <div
      className={
        variant === "grid"
          ? "grid grid-cols-2 gap-3"
          : "flex flex-wrap justify-center gap-x-6 gap-y-3"
      }
    >
      {badges.map((badge) => (
        <div key={badge.title} className="flex items-center gap-2">
          {badge.icon}
          <div>
            <p className="text-xs font-semibold text-text-primary leading-none">{badge.title}</p>
            <p className="text-[11px] text-text-muted mt-0.5">{badge.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
