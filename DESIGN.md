# DESIGN.md — Kampsportstadion

The visual system. Tokens, type, spacing, motion. Update this file when tokens change so future sessions stay coherent.

## Color

**Strategy:** *Restrained*. Tinted neutrals plus one deep ink accent ≤5% of surface.

All colors expressed in OKLCH. No `#000`. No `#fff`. Every neutral is tinted toward the cool axis (250°) for paper/ink coherence.

### Tokens

| Token | OKLCH | Use |
|---|---|---|
| `--paper` | `oklch(0.985 0.004 80)` | Page background. Warm-cast near-white — paper, not screen. |
| `--paper-dim` | `oklch(0.965 0.004 80)` | Recessed surfaces (cards if used, inputs). |
| `--ink` | `oklch(0.18 0.012 250)` | Primary text, primary surfaces in inverse. Cool near-black. |
| `--ink-soft` | `oklch(0.30 0.010 250)` | Secondary text. |
| `--graphite-300` | `oklch(0.78 0.006 250)` | Hairline borders, dividers. |
| `--graphite-500` | `oklch(0.55 0.008 250)` | Tertiary text, captions. |
| `--graphite-700` | `oklch(0.40 0.010 250)` | Strong borders, secondary fills on inverse. |
| `--accent` | `oklch(0.40 0.085 248)` | Single editorial accent. Deep ink-blue. Used on focus rings, hover, one emphasis per page. |
| `--accent-soft` | `oklch(0.94 0.025 248)` | Selection background, soft highlights. |

### Schedule class-family colors

Muted, brand-coherent. All similar lightness for visual rhythm; hue separation for parsing.

| Family | Token | OKLCH |
|---|---|---|
| Kampsportfys | `--cls-fys` | `oklch(0.62 0.012 250)` (warm graphite — feels "neutral fitness") |
| Thaiboxning | `--cls-thai` | `oklch(0.55 0.085 145)` (forest green) |
| BJJ | `--cls-bjj` | `oklch(0.55 0.080 240)` (steel blue) |
| MMA | `--cls-mma` | `oklch(0.60 0.110 60)` (burnt amber) |
| SW | `--cls-sw` | `oklch(0.50 0.110 25)` (oxblood) |
| Barn-accent (border/dot) | `--cls-barn` | `oklch(0.78 0.140 95)` (mustard — used as a small mark, NOT a side-stripe) |
| NPF | `--cls-npf` | `oklch(0.55 0.110 305)` (heather purple) |

## Typography

**Two families.** Inter (already loaded) for body and UI. Fraunces variable serif for display — chosen for civic gravitas, athletic confidence, distinct from any combat-sport cliché.

| Style | Family | Weight | Size (mobile / desktop) | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| `display-xl` | Fraunces | 700 (opsz 144, SOFT 0) | 56 / 96 px | -0.03em | 0.95 |
| `display-lg` | Fraunces | 700 | 40 / 64 px | -0.025em | 1.0 |
| `display-md` | Fraunces | 600 | 28 / 40 px | -0.02em | 1.1 |
| `eyebrow` | Inter | 600 | 11 / 12 px | +0.18em UPPERCASE | 1.0 |
| `body-lg` | Inter | 400 | 18 / 20 px | -0.005em | 1.55 |
| `body` | Inter | 400 | 16 / 17 px | 0 | 1.6 |
| `body-sm` | Inter | 400 | 14 / 14 px | 0 | 1.5 |
| `label` | Inter | 600 | 13 / 14 px | +0.02em | 1.3 |
| `numeric` | Inter (tabular nums) | 500 | inherit | 0 | inherit |

Body line length capped at 65–72ch. Headline line length 18–28ch.

**Headlines: Fraunces. Everything else: Inter.** No third family.

## Spacing scale

Based on a 4px unit. `1 = 4px`.

`0.5, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 56, 80, 120`

Use rhythmically — don't pad everything by 4. Section padding (top/bottom) varies: 80 on mobile, 120 on desktop for marquee sections; 40/56 for content sections.

## Layout

- Max content widths: prose 65ch; standard 1120px; wide 1320px.
- Page-edge padding: 24px mobile, 40px tablet, 64px desktop, 80px ultrawide.
- No "container all the things" reflex. Hero, schedule, image grids can break out wider; prose stays narrow.
- Cards used sparingly. Default to typographic hierarchy + dividers.

## Borders & elevation

- Hairline borders only: 1px, `--graphite-300`.
- No shadows by default. Optional single inset shadow for paper-dim surfaces.
- No drop shadows on hover (we use accent border or background shift).
- No "glassmorphism." No backdrop blur except on the floating navbar over images.

## Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quint). No bounce, no elastic.
- Durations: 150ms (micro UI), 280ms (component transitions), 600ms (page reveals).
- Never animate layout properties. Use transform + opacity.
- `prefers-reduced-motion` respected: durations clamped to 0.01ms, transforms removed.

## Iconography

- Stroke icons, 1.5px, line-cap round.
- Source: lucide-react when needed (no install yet — only add if a page truly needs it).
- Existing brand assets stay: `dif.png`, `ks-logo.svg`, `ks-logo-black.svg`, social SVGs.

## Components

Shared primitives live in `src/components/ui/`. Higher-level page sections live in `src/components/sections/`. Page-specific compositions live in their route folder.

| Primitive | Purpose |
|---|---|
| `<Container>` | Standard 1120px-max wrapper with edge padding. Variants: `prose` `wide`. |
| `<Section>` | Top/bottom section padding rhythm. Variants: `tight` `default` `marquee`. |
| `<Eyebrow>` | Uppercase label above headlines. |
| `<Heading>` | h1–h3 with display-xl/lg/md presets. |
| `<Button>` | Replaces `BlackButton`. Variants: `primary` `ghost` `link`. Sizes: `md` `lg`. |
| `<Divider>` | Hairline rule. |
| `<Navbar>` | Replaces `MobileNavbar`. Same wordmark assets. |
| `<Footer>` | Replaces `Footer`. |
| `<Schedule>` | Phase 2. The main feature. |

## Absolute bans (skill-wide + project-specific)

Match-and-refuse:

- ❌ Side-stripe colored borders on cards/list items (banned by skill).
- ❌ Gradient text via `background-clip: text`.
- ❌ Glassmorphism as default.
- ❌ Hero-metric template (big number + small label + supporting stats).
- ❌ Identical card grids (icon + heading + text repeated).
- ❌ Modal as first thought.
- ❌ Em dashes in copy (use commas/colons/parens).
- ❌ Pure `#000` / `#fff` anywhere in CSS.
- ❌ Red as a primary accent (combat-sport cliché).
- ❌ Navy + gold (football-club cliché).
- ❌ Gym-bro typography (slab serif italics, brushstroke fonts, "POWER" all-caps).
