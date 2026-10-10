# Website SEO audit — Steady Flame Hauling and Junk Removal

**Audit date:** October 10, 2026  
**Website:** https://www.kerrvillejunk.com/  
**Evidence:** GSC Wizard crawl of five important pages, live HTTP headers, repository files, and public Google results. This is a sampled technical audit, not a ranking guarantee or a full content review.

## Findings

- **Host and canonical mismatch:** All five sampled www pages returned HTTP 200 but declared canonicals on the non-www host. A live request to the non-www homepage returned HTTP 307 to https://www.kerrvillejunk.com/, so the canonical target redirected back to www. The draft aligns page canonicals, structured-data URLs, robots.txt, and sitemap URLs to the final host.
- **Sitemap dates were stale:** The static sitemap used the same September 2, 2026 last-modified date across its pages. The draft removes those dates instead of asserting unverified updates.
- **Thank-you page was in the sitemap:** The confirmation page already carries noindex; the draft removes it from the sitemap.
- **Review markup was outdated and ineligible:** LocalBusiness JSON-LD repeated an aggregate of 47 reviews; the public profile displayed 31 on the audit date. Google does not show self-serving LocalBusiness review snippets for a business's own site, so the draft removes this aggregate. The visible review widget is unchanged.
- **GBP details need owner confirmation:** Google showed the profile as “The Junk Pros Kerrville,” with 31 reviews, a 5.0 rating, and junk-removal-related categories. The signed-in panel said more verification information was required before edits would be visible. Google showed no phone number; the website lists (830) 285-4281. Google showed “Open · Closes 6 PM,” while the website source says 7 AM–7 PM daily. Confirm the current name, phone, and hours with the owners before changing either source.
- **Claims to confirm:** The site describes same-day service, free estimates, and eco-friendly disposal. Confirm these remain accurate before using them in new content or GBP copy.

## Pages sampled

Homepage, services hub, Kerrville area page, contact page, and pricing page. All five returned HTTP 200 and had an H1. The crawler reported them as canonicalised because the canonical host differed from the requested www URL; this alone does not establish that their non-www counterparts are missing from Google's index.

## Measurement baseline

- Search Console reported 145 impressions and 1 click in its latest 28-day view through October 6, 2026. The preceding comparison had no data, so this is a starting baseline rather than a growth result.
- Queries included junk removal Kerrville, junk removal Canyon Lake, and Spring Branch junk removal. It also showed unrelated hazardous-material queries; do not target asbestos or lead-paint removal unless the company confirms it offers those services.
- GA4 recorded 3 sessions and 9 events from September 10 through October 7, 2026, with no lead key events in that period. The property is new, so this is an early baseline.

## Owner actions

1. Complete Google Business Profile verification.
2. Confirm the public business name, phone, weekly hours, service area, and accepted services.
3. After confirmation, set the profile website link to https://www.kerrvillejunk.com/ once the site changes are deployed.
4. Confirm which towns are genuinely served before expanding or rewriting location pages.
5. Confirm whether same-day service, free estimates, and eco-friendly disposal accurately describe current operations.
