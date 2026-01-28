---
description: Critical React performance audit focusing on Waterfalls and Bundle Size.
---

# Critical React Performance Audit

## 1. Eliminate Waterfalls (CRITICAL)
- **Goal**: Identify and fix sequential `await` calls that could be parallelized.
- **Action**:
  1. Search for `await` occurrences in `src/` to identify sequential data fetching.
  2. Specifically check `useEffect` or server components for serial fetches.
  3. Review `api` calls to ensure they aren't chaining unnecessarily.

## 2. Optimize Bundle Size (CRITICAL)
- **Goal**: Reduce initial JS payload.
- **Action**:
  1. **Barrel Files**: Check for `index.ts` files in `components` or `utils` that export everything. Large barrel files can break tree-shaking.
  2. **Heavy Imports**: Check for full library imports (e.g., `import * as _ from 'lodash'`).
  3. **Lazy Loading**: Identify heavy components (like Maps, Charts, Rich Text Editors, or below-the-fold sections) that are imported synchronously. Suggest `React.lazy` or `next/dynamic`.

## 3. Image Optimization (HIGH)
- **Goal**: prevent layout shifts and large downloads.
- **Action**:
  1. Ensure generic `<img>` tags have `width` and `height` or use a framework Image component.
  2. Check for lazy loading attributes on below-the-fold images.
