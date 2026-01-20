---
description: Comprehensive UI/UX audit workflow that prevents common CSS layout failures
---

# UI/UX Design Audit Workflow

This workflow enforces rigorous visual and structural verification for any UI/UX work. Follow this protocol for EVERY design-related change.

## Phase 1: Pre-Flight Checks

Before making any UI changes:

1. **Take a "Before" Screenshot**
   - Use `mcp_chrome-devtools_take_screenshot` with `fullPage: true`
   - Save to artifacts for comparison

2. **Identify the Design System Tokens**
   - Check `tailwind.config.js` for spacing, colors, radius
   - Check `index.css` for utility classes
   - Document expected values

---

## Phase 2: The Layout Integrity Check

For EVERY element you modify, verify these properties:

### Block-Level Centering (THE MAX-WIDTH TRAP)
```js
// BAD: text-align centers text, not the block
element.style.textAlign = 'center'; // ❌ Block still left-aligned

// GOOD: margin auto centers the block
element.style.margin = '0 auto'; // ✅ Block is centered
```

**Verification Script:**
```js
const el = document.querySelector('h2');
const rect = el.getBoundingClientRect();
const parent = el.parentElement.getBoundingClientRect();
const leftGap = rect.left - parent.left;
const rightGap = parent.right - rect.right;
const isCentered = Math.abs(leftGap - rightGap) < 5;
console.log({ leftGap, rightGap, isCentered });
```

### Alignment Checklist
| Check | How to Verify | Pass Criteria |
|-------|---------------|---------------|
| Text Alignment | `getComputedStyle(el).textAlign` | Matches design |
| Block Centering | `el.getBoundingClientRect()` vs parent | Left/right gaps equal |
| Margin Auto | `getComputedStyle(el).marginLeft/Right` | Both show equal px values (not 0) |
| Flex Centering | Parent has `justify-center` or `items-center` | If flex container |

---

## Phase 3: Visual Verification (MANDATORY)

After making changes:

1. **Take an "After" Screenshot**
   - Same viewport size as before
   - Compare side-by-side

2. **Check These Visual Properties:**
   - [ ] Headlines visually centered? (not just text-align)
   - [ ] Cards/containers evenly spaced?
   - [ ] Buttons same height when side-by-side?
   - [ ] No orphaned words at end of paragraphs?

3. **Scroll Test:**
   - [ ] Check at mobile (375px), tablet (768px), desktop (1440px)
   - [ ] No horizontal overflow?
   - [ ] Text readable at all sizes?

---

## Phase 4: The 5-Point Audit Script

Run this script after any layout change:

// turbo
```js
(() => {
  const results = [];
  
  // 1. All headings centered?
  document.querySelectorAll('h1, h2, h3').forEach(h => {
    const rect = h.getBoundingClientRect();
    const parent = h.parentElement?.getBoundingClientRect();
    if (parent) {
      const leftGap = rect.left - parent.left;
      const rightGap = parent.right - rect.right;
      results.push({
        text: h.textContent?.substring(0, 30),
        isCentered: Math.abs(leftGap - rightGap) < 10,
        leftGap: Math.round(leftGap),
        rightGap: Math.round(rightGap)
      });
    }
  });
  
  // 2. Any magic numbers in spacing?
  const magicNumbers = [];
  document.querySelectorAll('[class*="p-"], [class*="m-"]').forEach(el => {
    const style = getComputedStyle(el);
    [style.paddingTop, style.paddingBottom, style.marginTop, style.marginBottom].forEach(v => {
      const px = parseFloat(v);
      if (px > 0 && px % 4 !== 0) {
        magicNumbers.push({ el: el.className.substring(0, 30), value: v });
      }
    });
  });
  
  return { 
    headingCheck: results,
    magicNumbers: magicNumbers.slice(0, 5)
  };
})();
```

---

## Critical Rules

> [!CAUTION]
> **THE MAX-WIDTH TRAP**
> Any element with `max-width` that should be centered MUST have either:
> - `margin: 0 auto` (or Tailwind `mx-auto`)
> - Parent with `display: flex; justify-content: center;`
> 
> `text-align: center` alone does NOT center a block element!

> [!IMPORTANT]
> **VISUAL VERIFICATION IS NOT OPTIONAL**
> Never trust computed styles alone. Always take screenshots before/after.

> [!TIP]
> **Use getBoundingClientRect()**
> `getComputedStyle().textAlign` shows CSS values, not visual position.
> `getBoundingClientRect()` shows actual pixel position on screen.

---

## When This Workflow Applies

- [ ] Any change to headings, titles, or hero text
- [ ] Any change to card layouts or grids
- [ ] Any change to button sizing or alignment
- [ ] Any change to spacing (padding, margin, gap)
- [ ] Any new component added to the design system
- [ ] Any responsive breakpoint adjustments
