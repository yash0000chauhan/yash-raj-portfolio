# Yash Raj Chauhan — Software Engineer & AI Engineer

Personal site for **Yash Raj Chauhan**, a Software Engineer / AI Engineer in Pune working across full-stack web apps, backend APIs, automation, and AI applications.

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
| `NEXT_PUBLIC_SITE_URL` | Client + SEO | Canonical, sitemap, Open Graph. Empty values fall back to `https://yash-raj-portfolio.vercel.app`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Client | Optional override for the public email (defaults to the address in `src/content/site.ts`). |
| `CONTACT_EMAIL` | Server | Optional contact-API destination override. |
| `RESEND_API_KEY` | Server | Optional email delivery via Resend. |
| `CONTACT_FROM_EMAIL` | Server | Optional Resend from address. |

No secrets are required to go live. The contact form falls back to mailto using the public email when Resend is not configured.

## Edit content

| File | What it controls |
| --- | --- |
| `src/content/site.ts` | Name, title, hero copy, nav, SEO, contact options |
| `src/content/about.ts` | About copy, education, roles |
| `src/content/experience.ts` | Timeline roles |
| `src/content/projects.ts` | Featured projects and case studies |
| `src/content/skills.ts` | Skills groups and certifications |
| `src/content/services.ts` | Services |
| `src/content/journey.ts` | Journey steps |
| `src/content/pipelines.ts` | Hero and “How I build” nodes |
| `src/content/github.ts` | Known public repositories |

MarketEZ is omitted until verified details exist. Only the Candidate Ranking GitHub repository is linked from projects.

## Deploy

GitHub: [https://github.com/yash0000chauhan/yash-raj-portfolio](https://github.com/yash0000chauhan/yash-raj-portfolio)

This is a standard Next.js App Router app. Vercel detects it automatically.

Canonical URL: `https://yash-raj-portfolio.vercel.app`
