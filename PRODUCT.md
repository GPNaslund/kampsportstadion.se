# PRODUCT.md — Kampsportstadion

## Identity

**Kampsportstadion** is the combat-sports section of **Djurgårdens IF Kampsportsförening**, a non-profit Stockholm sports association ("idrottsförening") training under the historic Stockholm Stadion (built 1912 for the Olympics).

The website is the public face of the club. Members use it for the schedule and pricing. Prospective members use it to decide if Kampsportstadion is for them. Sponsors and journalists use it to understand what the club is and stands for.

## Register

**brand** — Most surfaces (home, klasser, medlemskap, kontakt, sociala-projekt, foretag, pt) are marketing/identity surfaces. The schedule page (`/schema`) and its embedded component lean **product** (a working tool members consult weekly). Apply the brand register globally; treat the schedule itself as a precision instrument inside that brand frame.

## Users

- **Members** (every age 4–60+): check schedule, find class details, see prices for renewal.
- **Prospective members**: looking for "is this place for serious people, or for kids, or both?" Answer: confidently, both — barngrupp through tävlingselit under one roof.
- **Parents** of kids in the youth/barn programs: scanning for safety, structure, age-appropriate classes.
- **Sponsors and partners** (DIF, local companies, sociala-projekt funders): want to see a serious, well-run association.
- **Press/club observers**: occasional, but the design must hold up to a journalist landing on it.

## Product purpose

1. Make the **weekly class schedule** unambiguous, current, beautiful, and downloadable as an image so it can be shared on social/printouts without losing the brand.
2. Convey the **identity of a serious, civic-minded, inclusive combat-sports club** — not a fitness studio, not a fight gym, not a chain.
3. Make joining (medlemskap), trying (prova på), and contacting frictionless.

## Voice & tone

- Swedish-first throughout. Direct, warm, unembellished. Respect the reader.
- No marketing puffery. No "transform your life." No exclamation marks beyond what existing copy already uses.
- Existing body copy is to be preserved verbatim through this redesign — only structure and styling change. Future copy edits are out of scope.

## Brand principles

1. **Civic, not commercial.** This is a non-profit association under the second-oldest sports club in Stockholm. Read like an institution, not a startup.
2. **Stockholm Stadion in the bones.** Brick, granite, 1912, civic monumentality. Generous space, confident type, document-feel.
3. **Combat sport with discipline, not edge.** Restraint signals seriousness. Black walls and red lighting signal posturing. We do the first.
4. **Inclusive across the spectrum.** A 6-year-old in Kampsportlek and a UFC fighter both train here. Design must hold both without condescending to either.
5. **Black, white, gray as a commitment.** Color strategy is *Restrained* (one deep ink-blue accent, ≤5% surface). No drenched palettes, no gradient text, no neon.

## Anti-references — what we are NOT

- ❌ "MMA gym" aesthetic: black backgrounds, red accents, pixelated metal textures, fight-poster typography.
- ❌ Fitness studio aesthetic: pastel cream, Pilates pink, soft serif logo, "your wellness journey".
- ❌ SaaS startup aesthetic: gradient hero, big rounded cards, three-feature grid, pastel pink/violet.
- ❌ Football-club site aesthetic: deep blue everything, sponsor logo wall above the fold, news-feed homepage.
- ❌ Direct DIF visual identity (we share the heritage, not the kit).

## Reference vibe (without copying)

Think: Swedish Olympic Committee report. The interior of an old kommunal idrottshall. A 1970s sports federation handbook. The wordmark of a mid-century Swedish bank. A Wallpaper* spread on Stockholm civic architecture. The schedule page of a Konsthall. A Jasper Morrison-era Muji catalogue.

Think NOT: Equinox. Barry's Bootcamp. UFC.com. Onnit. Any combat-sport website you have ever seen.

## Constraints (technical)

- Next.js 13.5 (app router), TypeScript, Tailwind 3, static export (`output: 'export'`), Firebase Hosting.
- All Swedish characters (å, ä, ö) must render correctly.
- Site is statically rendered — no SSR features.
- Mobile-first. Bulk of weekly schedule consultations happen on phones.
