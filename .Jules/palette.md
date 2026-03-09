## 2024-03-02 - ARIA Labels for Icon-Only Buttons
**Learning:** Icon-only interactive elements (like the theme toggle and WhatsApp link) in this portfolio were missing descriptive labels, making them inaccessible to screen readers.
**Action:** Always verify that buttons or links containing only emojis or icons have appropriate `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-03-02 - Missing "Skip to content" link for keyboard users
**Learning:** The portfolio navigation is sticky, which forces keyboard users to tab through all navigation links and top-level elements before reaching the actual content on every page reload or deep-link navigation.
**Action:** Implemented an invisible "skip-to-content" link that becomes visible on focus at the very top of the DOM structure, mapping directly to a target `id` on the `<main>` wrapper, greatly improving keyboard navigation accessibility.## 2026-03-09 - Minimal Boxed Layouts
**Learning:** When adding padding and borders to main HTML `<section>` elements to create a separated layout, previously nested `.boxed-section` or wrapper elements can cause visual 'double boxing'.
**Action:** Removed background, borders, and shadows from inner grouping classes (like `.boxed-section`) when hoisting the card aesthetic up to the parent `<section>` tags.
