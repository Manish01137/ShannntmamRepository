export function ComingSoonPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative flex aspect-4/5 w-full flex-col items-center justify-center gap-4 bg-patina-light/50 px-6 text-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
        className="text-bronze/40"
      >
        <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 34c0-6.6 5.4-12 12-12s12 5.4 12 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <p className="font-display text-base text-bronze italic">{title}</p>
      <p className="font-sans text-xs tracking-wide text-bronze uppercase">
        Photograph coming soon
      </p>
    </div>
  );
}
