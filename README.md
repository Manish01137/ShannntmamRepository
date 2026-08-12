# shantasamanta.com

Portfolio site for Dr. Shanta M. Sarvaiya (Shanta Samanta), bronze sculptor. Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All copy lives in `src/content/` (`bio.ts`, `series.ts`, `pieces.ts`, `exhibitions.ts`, `press.ts`) — typed data files, not hard-coded in components. To add a new sculpture, add an entry to `pieces.ts`; to add a press mention, add an entry to `pressItems` in `press.ts`.

The Phase 0 image-matching audit — which source photo maps to which piece, confidence levels, and flagged/unresolved items — is documented in `content/image-manifest.md`. Read that before adding or re-matching photography.

Raw source photography (`Faded Memories/`, `Ode to Nature/`, `Shringar/`, `drive-download-*/`) lives on disk but is gitignored — it's the pre-processing originals, not the web-ready assets. The processed `.webp` files actually served by the site are in `public/images/`. To reprocess after adding new source photos, edit the file map in `scripts/process-images.mjs` and run `node scripts/process-images.mjs`.

## Contact form

The `/contact` form posts to `src/app/api/contact/route.ts`, which sends via [Resend](https://resend.com). It needs two environment variables (see `.env.example`):

- `RESEND_API_KEY` — from your Resend account
- `CONTACT_TO_EMAIL` — the inbox that should receive enquiries

Until both are set, the form fails gracefully with a friendly on-page message instead of crashing. For production deliverability, verify your own sending domain in Resend and set `CONTACT_FROM_EMAIL` to an address on it (otherwise it falls back to `onboarding@resend.dev`, which works but is less trusted by spam filters).

## Deployment

Built for Vercel — connect the repo, add the two env vars above in Project Settings, and deploy. No database, no other infra.

## Known content gaps

- **Shackled** and **Object Study** ship with an on-brand "Photograph coming soon" placeholder — no photo exists yet for either piece.
- Several real, photographed pieces have no title/statement documented anywhere in the source brief (two abstract "Mystery" works, a portrait-bust study, "Driving, Driving", "Only for You", plus a few extra Shringar photos). They're shown in the Portfolio grid with plain factual captions only — see `content/image-manifest.md` for the full list. Send proper titles/statements whenever you have them and update `pieces.ts`.
- The Press page has one confirmed feature (Art & Deal Magazine, 2023) with no verbatim pull-quotes yet — none were fabricated. Send the scan/PDF and 2–3 real quotes to add via `pressItems` in `src/content/press.ts`.
# ShannntmamRepository
