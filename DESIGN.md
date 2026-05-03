# DESIGN.md — Kampsportstadion

The visual system. Tokens, type, spacing, motion. Update this file when tokens change so future sessions stay coherent.

## Color

**Strategy:** *Restrained*. Tinted neutrals plus one deep ink accent ≤5% of surface.

**Owner intent overrides skill defaults.** The brand is white, black, gray, with DIF-blue as the single accent. No cream, no tint. Neutrals are true neutral.

### Tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#ffffff` | Page background. Pure white. |
| `--paper-dim` | `#ebebec` | Recessed surfaces, soft contrast bands. Clearly light gray, never cream. |
| `--ink` | `#0f1012` | Primary text and primary surfaces in inverse. Near-black. |
| `--ink-deep` | `#08090a` | Inverted dark bands (footer, closing CTA) — read as "true black" against paper. |
| `--ink-soft` | `#3a3b3f` | Secondary text. |
| `--graphite-300` | `#d1d1d3` | Hairline borders, dividers. |
| `--graphite-500` | `#8a8a8d` | Tertiary text, captions. |
| `--graphite-700` | `#58585c` | Strong borders, inverse fills. |
| `--accent` | `oklch(0.42 0.110 248)` | DIF blue. Hover, focus, single emphasis per page. ≤5% of any surface. |
| `--accent-soft` | `oklch(0.94 0.025 248)` | Selection background only. |

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

**One family: Inter.** Display weight (extrabold/black) with very tight tracking handles all headline duty — no serif, no second face. Reads athletic, civic, restrained. Closer to stadium signage than to magazine.

| Style | Weight | Size (mobile / desktop) | Letter-spacing | Line-height |
|---|---|---|---|---|
| `display-xl` | 800/900 | 52 / 84 px | -0.05em | 0.92 |
| `display-lg` | 800 | 36 / 56 px | -0.04em | 1.0 |
| `display-md` | 700 | 24 / 32 px | -0.025em | 1.1 |
| `eyebrow` | 600 | 11 / 12 px | +0.18em UPPERCASE | 1.0 |
| `body-lg` | 400 | 18 / 20 px | -0.005em | 1.55 |
| `body` | 400 | 16 / 17 px | 0 | 1.6 |
| `body-sm` | 400 | 14 / 14 px | 0 | 1.5 |
| `label` | 600 | 13 / 14 px | +0.02em | 1.3 |
| `numeric` | 500 | inherit | 0 (tabular) | inherit |

Body line length capped at 65–72ch. Headline line length 12–22ch (display weight needs less).

**One family. All weights from 400 to 900.**

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
