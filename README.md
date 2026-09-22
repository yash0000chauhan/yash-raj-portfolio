# Yash Raj Chauhan — AI Engineer Portfolio

Production-ready personal site for **Yash Raj Chauhan**, an AI Engineer working across Generative AI, RAG, AI agents, computer vision, document AI, and automation.

Content is separated from UI. Update projects, experience, links, and services in `src/content/` without rewriting components.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

The dev server binds to `0.0.0.0:4327`.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Configure

| Variable | Where | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Client + SEO | Canonical, sitemap, Open Graph |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Client | Shown in the contact panel and copy-email action |
| `CONTACT_EMAIL` | Server | Contact API destination |
| `RESEND_API_KEY` | Server | Optional email delivery via Resend |
| `CONTACT_FROM_EMAIL` | Server | Optional Resend from address |

If no email env vars are set, the contact form asks the visitor to continue on LinkedIn instead of inventing an address. Never put secrets in client code.

## Edit content

| File | What it controls |
| --- | --- |
| `src/content/site.ts` | Name, title, hero copy, nav, SEO, contact options |
| `src/content/about.ts` | About copy and roles |
| `src/content/experience.ts` | Timeline roles |
| `src/content/projects.ts` | Featured projects and case studies |
| `src/content/skills.ts` | Skills matrix |
| `src/content/services.ts` | Services |
| `src/content/journey.ts` | Journey steps |
| `src/content/pipelines.ts` | Hero and “How I build AI” nodes |
| `src/content/github.ts` | Known public repositories |

MarketEZ is listed with only the verified category. Add case-study fields in `projects.ts` when they are ready.

## Deploy

The app is a standard Next.js App Router project and can be deployed on Vercel as-is. Set the env vars above on the host. `src/app/sitemap.ts` and `src/app/robots.ts` are generated at build time from `NEXT_PUBLIC_SITE_URL`.
