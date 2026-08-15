/** Interlocking "SS" monogram — Shanta Samanta. Pure linework so it recolors with `currentColor`. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden className={className}>
      <path
        d="M24.5 10c0-2.4-2.4-4-5.3-4-3 0-5.3 1.8-5.3 4.2 0 5.2 10.6 4.2 10.6 9.8 0 2.4-2.3 4.2-5.3 4.2-2.9 0-5.3-1.6-5.3-4"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M31.5 21c0-2.4-2.4-4-5.3-4-3 0-5.3 1.8-5.3 4.2 0 5.2 10.6 4.2 10.6 9.8 0 2.4-2.3 4.2-5.3 4.2-2.9 0-5.3-1.6-5.3-4"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}
