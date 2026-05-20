---
name: Atelier Draft
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5e5f'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#636465'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868382'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-xl-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Courier Prime
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Courier Prime
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

The design system is an exercise in "calculated imperfection," drawing inspiration from Maison Margiela’s deconstructionist philosophy and the raw intimacy of an archival artist’s notebook. It evokes the feeling of a high-end fashion editorial that is still in development—a lo-fi, tactile, and deeply human draft.

The aesthetic balances the structured whitespace of luxury publishing with the visceral, hand-drawn quality of architectural sketches. It rejects the clinical precision of modern software in favor of a "sketchy" UI where lines wobble, ink bleeds slightly, and the interface feels like an evolving dialogue between the designer and the page. The target audience values authenticity, craft, and an avant-garde approach to digital interaction.

## Colors

The palette is strictly curated to mimic physical media. The primary surface is an off-white paper tone, providing a warm, non-glare canvas that suggests a premium heavyweight stock.

- **Deep Charcoal (#1A1A1A):** Used for all primary "ink" work—text, hand-drawn borders, and iconography. It has the weight of a 4B pencil or a technical drafting pen.
- **Muted Wash (#D1D1D1):** Used for secondary elements, subtle annotations, and ghosted lines that represent "erased" or background thoughts.
- **Blueprint Blue (#2B45B1):** An optional accent used sparingly for links or highlights, mimicking the ink of a traditional ballpoint pen used for rapid notes.

## Typography

Typography functions as both information and texture. The system utilizes **Bricolage Grotesque** for display and headlines to mimic the quirky, irregular, and expressive handwriting of a creative director. Its variable widths and eccentricities provide the "sketched" feel necessary for high-impact areas.

For body copy, **Courier Prime** provides a monospaced, typewriter aesthetic that reinforces the archival nature of the design system. It is legible yet evocative of a draft manuscript. **JetBrains Mono** is used for functional labels and metadata, providing a clean, technical counterpoint to the more organic headline styles.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. While the content sits within a structured 12-column grid, elements should intentionally "drift" or "bleed" outside the lines to maintain the sketchbook feel.

- **Editorial Whitespace:** Margins are generous, forcing focus onto single elements.
- **Asymmetry:** Avoid perfect symmetry. Prefer layouts where the left and right columns have slightly different weights.
- **Wobble:** Component spacing should feel organic. While the code uses fixed units (e.g., 24px), the visual implementation should use "sketchy" borders that create an illusion of irregular padding.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to a single column with a 20px safe area, maintaining the typewriter-style verticality.

## Elevation & Depth

This design system avoids digital shadows and blurs. Instead, depth is achieved through **Tonal Layering** and **Graphic Overlays**.

- **Stacked Paper:** Depth is shown by placing one element over another with a visible, hand-drawn border. There is no Z-axis blur; if an element is "above" another, it simply obscures it.
- **Carbon Overlays:** Active states or modals use a semi-transparent "vellum" effect (low-opacity white) rather than a dark overlay, keeping the paper texture visible.
- **Visual Weight:** Hierarchy is established through ink density. Thicker, darker hand-drawn lines signify "closer" or "more important" elements, while faint, sketchy lines signify background or disabled states.

## Shapes

The shape language is defined by the "Sketchy Line." Every border should look like it was drawn with a rapidograph or a technical pen.

- **Borders:** Never use a clean `1px solid`. Instead, use an SVG stroke with a slight "wobble" filter or a CSS `border-image` that looks like a hand-drawn line. Lines should occasionally overshoot their corners (cross-hatching).
- **Accents:** Use hand-drawn ovals for highlighting text, rough stars for "favorites," and X-marks for deletions.
- **Corners:** While the functional roundedness is set to Soft (0.25rem), the actual visual corners should look slightly inconsistent, as if hand-turned.

## Components

- **Buttons:** Styled as hand-drawn rectangles. The "Primary" button has a thick, double-stroke border. The "Secondary" button has a single, faint sketchy line. Interaction states (hover) should trigger a "scribble" fill effect.
- **Inputs:** A simple horizontal line that looks hand-drawn, with the label appearing as a small monospaced annotation above it.
- **Cards:** Defined by a rough border with "stitch marks" at the corners. They do not have shadows; they rely on their "ink" weight to stand out from the background.
- **Chips/Tags:** Enclosed in hand-drawn ovals or "tape" shapes (rectangles with jagged ends).
- **Checkboxes:** Represented by a small hand-drawn square. When checked, a rough "X" or "check" is drawn inside, slightly overflowing the bounds of the box.
- **Lists:** Bullet points are replaced with hand-drawn dashes (-) or small ink blots.
- **Dividers:** Irregular horizontal lines that vary in thickness across the width of the container.