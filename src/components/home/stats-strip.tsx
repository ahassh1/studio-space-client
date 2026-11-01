const stats = [
  { value: "1,200+", label: "Vetted studios" },
  { value: "38", label: "Cities live" },
  { value: "4.9/5", label: "Average host rating" },
  { value: "60 sec", label: "Average booking time" },
];
export function StatsStrip() {
  return (
    <section
      aria-label="StudioSpace at a glance"
      className="border-b border-border bg-card/30"
    >
      <ul className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-7 px-4 py-8 sm:gap-y-8 sm:px-6 sm:py-10 lg:grid-cols-4 lg:gap-y-0 lg:px-8">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex flex-col items-center gap-1 text-center transition-transform duration-300 hover:-translate-y-1 lg:border-l lg:border-border lg:first:border-l-0"
          >
            <span className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {stat.value}
            </span>
            <span className="text-xs tracking-wide text-muted-foreground uppercase">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}