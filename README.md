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

GitHub: [https://github.com/yash0000chauhan/yash-raj-portfolio](https://github.com/yash0000chauhan/yash-raj-portfolio)

This is a standard Next.js App Router app. Vercel detects it automatically. **No secrets are required to go live.** The contact form already falls back to LinkedIn / mailto when email env vars are empty. Do not invent an email or commit `.env` files.

### Push this repo (if the remote is still empty)

```bash
git remote add github https://github.com/yash0000chauhan/yash-raj-portfolio.git
git push -u github HEAD:main
```

### Vercel (exact steps)

1. Open [vercel.com/new](https://vercel.com/new) and sign in with the GitHub account that owns `yash0000chauhan/yash-raj-portfolio`.
2. Import **yash0000chauhan/yash-raj-portfolio**.
3. Leave the defaults:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build`
   - Output: Next.js default (do not set a static export)
4. Environment variables — all optional:
   - `NEXT_PUBLIC_SITE_URL` — set this to the production URL **after** the first deploy (example: `https://yash-raj-portfolio.vercel.app`), then redeploy so sitemap, robots, and Open Graph use it.
   - `NEXT_PUBLIC_CONTACT_EMAIL` / `CONTACT_EMAIL` — only if you have a real public inbox.
   - `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` — only if you want the API to send mail. Leave blank otherwise.
5. Click **Deploy**.
6. After the first URL exists, set `NEXT_PUBLIC_SITE_URL` to that URL and Redeploy.

Do not add placeholder emails, API keys, or analytics IDs. Contact works without them.
