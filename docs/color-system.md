# Kassatly Chtaura Color System

## Overview
This document outlines the complete color system for the Kassatly Chtaura website, based on the brand guidelines and implemented for use with Tailwind CSS.

## Brand Color Palette

### Primary Colors
Based on the 12 Pantone colors from the brand guidelines:

| Pantone Code | Color Name | Hex Value | Tailwind Class |
|--------------|------------|-----------|----------------|
| PANTONE 4545C | Light Beige | `#F5F2E8` | `primary-50` |
| PANTONE 7531C | Warm Brown | `#8B7355` | `secondary-600` |
| PANTONE 7546C | Dark Navy | `#2D3543` | `navy-900` |
| PANTONE 441C | Light Grey | `#E8E9EA` | `grey-100` |
| PANTONE 5405C | Slate Blue | `#6B7B8C` | `navy-500` |
| PANTONE 431C | Charcoal | `#5A5A5A` | `charcoal-600` |
| PANTONE 479C | Terracotta | `#A67C52` | `terracotta-500` |
| PANTONE 506C | Burgundy | `#8B3A3A` | `burgundy-600` |
| PANTONE 7606C | Dusty Rose | `#D4A5A5` | `burgundy-200` |
| PANTONE 693C | Soft Pink | `#F5C6C6` | `burgundy-100` |
| PANTONE 7464C | Mint Teal | `#7FB3B3` | `teal-400` |
| PANTONE 665C | Soft Lavender | `#C4A5C4` | `teal-200` |

## Color Families

### 1. Primary (Beige) - `primary-*`
- **Usage**: Main brand color, backgrounds, highlights
- **Range**: `primary-50` (lightest) to `primary-900` (darkest)
- **Default**: `primary-500` (#b49d64)

### 2. Navy (Primary Brand) - `navy-*`
- **Usage**: Primary text, headers, main brand elements
- **Range**: `navy-50` (lightest) to `navy-900` (darkest)
- **Default**: `navy-500` (#697d9b)

### 3. Secondary (Brown) - `secondary-*`
- **Usage**: Secondary text, supporting elements
- **Range**: `secondary-50` (lightest) to `secondary-900` (darkest)
- **Default**: `secondary-500` (#9b8c64)

### 4. Terracotta (Accent) - `terracotta-*`
- **Usage**: Call-to-action buttons, accent elements
- **Range**: `terracotta-50` (lightest) to `terracotta-900` (darkest)
- **Default**: `terracotta-500` (#af7d69)

### 5. Burgundy - `burgundy-*`
- **Usage**: Special accents, premium elements
- **Range**: `burgundy-50` (lightest) to `burgundy-900` (darkest)
- **Default**: `burgundy-500` (#9b6969)

### 6. Teal - `teal-*`
- **Usage**: Fresh elements, nature references
- **Range**: `teal-50` (lightest) to `teal-900` (darkest)
- **Default**: `teal-500` (#69af9b)

### 7. Grey - `grey-*`
- **Usage**: Neutral elements, borders, subtle backgrounds
- **Range**: `grey-50` (lightest) to `grey-900` (darkest)
- **Default**: `grey-500` (#b9c3c9)

### 8. Charcoal - `charcoal-*`
- **Usage**: Dark text, strong contrasts
- **Range**: `charcoal-50` (lightest) to `charcoal-900` (darkest)
- **Default**: `charcoal-500` (#9b9b9b)

## Brand Aliases

For semantic usage, these aliases are available:

```css
--color-brand-primary: #2d3543    /* navy-900 */
--color-brand-secondary: #9b8c64  /* secondary-500 */
--color-brand-accent: #af7d69     /* terracotta-500 */
--color-brand-light: #f8f6f0      /* primary-50 */
--color-brand-dark: #2d3543       /* navy-900 */
```

## Semantic Color Aliases

For component usage:

```css
--color-text-primary: var(--color-brand-primary)
--color-text-secondary: var(--color-grey-600)
--color-text-muted: var(--color-grey-500)
--color-border: var(--color-grey-200)
--color-border-hover: var(--color-grey-300)
--color-surface: var(--color-grey-50)
--color-surface-hover: var(--color-grey-100)
```

## Usage Examples

### Tailwind Classes
```html
<!-- Backgrounds -->
<div class="bg-primary-500">Primary background</div>
<div class="bg-navy-900">Dark navy background</div>
<div class="bg-terracotta-500">Accent background</div>

<!-- Text Colors -->
<h1 class="text-navy-900">Primary heading</h1>
<p class="text-grey-600">Secondary text</p>
<span class="text-terracotta-500">Accent text</span>

<!-- Borders -->
<div class="border border-grey-200">Subtle border</div>
<div class="border-2 border-terracotta-500">Accent border</div>

<!-- Hover States -->
<button class="bg-terracotta-500 hover:bg-terracotta-400">
  Hover me
</button>
```

### Button Variants
```html
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="accent">Accent Button</Button>
<Button variant="terracotta">Terracotta Button</Button>
<Button variant="burgundy">Burgundy Button</Button>
```

## Accessibility Guidelines

- **Contrast**: Ensure sufficient contrast between text and background colors
- **Focus States**: All interactive elements have focus rings using brand colors
- **Color Blindness**: Don't rely solely on color to convey information

## Implementation Notes

- Colors are defined in `app/globals.css` using CSS custom properties
- Tailwind config in `tailwind.config.ts` provides IntelliSense support
- All colors follow the 50-900 scale for consistency
- Brand colors are mapped to the closest Pantone equivalents



