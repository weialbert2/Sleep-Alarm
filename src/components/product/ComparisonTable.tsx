const rows = [
  { feature: "Wakes your partner?", traditional: "Yes — loud noise", fitsleeps: "No — zero noise" },
  { feature: "Can you sleep through it?", traditional: "Yes — easily", fitsleeps: "Hard to ignore" },
  { feature: "Phone in bedroom required?", traditional: "Yes", fitsleeps: "No" },
  { feature: "Battery life", traditional: "Plug-in or daily", fitsleeps: "30–60 days" },
  { feature: "Morning anxiety", traditional: "High — jarring sound", fitsleeps: "Low — gentle wake" },
  { feature: "Snooze temptation", traditional: "Very high", fitsleeps: "Low" },
  { feature: "Works for deep sleepers", traditional: "Often no", fitsleeps: "Designed for it" },
  { feature: "Wake-up guarantee", traditional: "None", fitsleeps: "100 nights, full refund" },
];

const Good = () => (
  <span className="inline-flex items-center gap-1 text-brand font-semibold text-sm">
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </span>
);

const Bad = () => (
  <span className="inline-flex items-center gap-1 text-alert-red font-semibold text-sm">
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </span>
);

export default function ComparisonTable() {
  return (
    <section className="py-section bg-surface-muted">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="section-heading">FitSleeps vs. Traditional Alarm</h2>
          <p className="section-sub mx-auto">See why 175,000+ people made the switch.</p>
        </div>

        <div className="max-w-3xl mx-auto overflow-hidden rounded-card border border-border shadow-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3.5 px-5 text-sm font-semibold text-text-muted w-[40%]">
                  Feature
                </th>
                <th className="py-3.5 px-5 text-center text-sm font-semibold text-text-muted w-[30%]">
                  Traditional Alarm
                </th>
                <th className="py-3.5 px-5 text-center text-sm font-bold text-white bg-brand w-[30%] rounded-tr-card">
                  FitSleeps ®
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-surface-muted"
                  }`}
                >
                  <td className="py-3.5 px-5 text-sm font-medium text-text-primary">{row.feature}</td>
                  <td className="py-3.5 px-5 text-center text-sm text-text-muted">
                    <div className="flex items-center justify-center gap-1.5">
                      <Bad />
                      <span className="hidden sm:inline">{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-center text-sm bg-brand-light">
                    <div className="flex items-center justify-center gap-1.5">
                      <Good />
                      <span className="font-medium text-brand hidden sm:inline">{row.fitsleeps}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
