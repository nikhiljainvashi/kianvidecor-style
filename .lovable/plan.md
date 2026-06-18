## Goal

Re-align KIANVI DECOR around its real catalog — **Luxury Wardrobes, Elegant Sofas, Tables & Chairs, Comfy Beds** — add the missing structural pieces (category pages + contact), and document the business strategy so the site reads as one coherent storefront. Checkout stays abstracted (email confirmation), as requested.

---

## 1. Site Structure (target sitemap)

```text
/                       Home — hero, category tiles, featured pieces, story strip
/shop                   All products (filter chips + category pills)
/category/wardrobes     Luxury Wardrobes
/category/sofas         Elegant Sofas
/category/tables-chairs Tables & Chairs
/category/beds          Comfy Beds
/product/$id            Product detail
/cart                   Cart
/checkout               Customer details (abstracted)
/confirmation           Order received
/about                  Atelier story
/contact                NEW — inquiry form + studio details
```

## 2. Catalog rework (`src/lib/products.ts`)

Replace the current 8 generic items with a curated set across the 4 real categories (≈3 pieces each, 12 total). Each product gets `category` aligned to the new taxonomy (`Wardrobes` | `Sofas` | `Tables & Chairs` | `Beds`), realistic luxury naming, Unsplash/Pexels imagery, price, description, and detail bullets (materials, dimensions, lead time).

Update `categories` export to: `["All", "Wardrobes", "Sofas", "Tables & Chairs", "Beds"]`.

## 3. New & updated routes

- **`src/routes/index.tsx`** — keep Noir & Gold hero; replace the single "Featured" grid with a **4-tile category grid** (Wardrobe / Sofa / Table & Chair / Bed) linking to each `/category/*` page, followed by a smaller "New this season" 4-product strip and the existing editorial split.
- **`src/routes/category.$slug.tsx`** — NEW dynamic route. Loader maps slug → category label, throws `notFound()` on miss. Renders category hero (name, short copy, hero image) + filtered product grid reusing `ProductCard`. Cross-sell strip at the bottom ("Pair it with…").
- **`src/routes/shop.tsx`** — keep, but update the category pills to the new taxonomy.
- **`src/routes/contact.tsx`** — NEW. Two-column layout: left = inquiry form (Name, Email, Phone optional, Subject [General / Trade / Press / Custom], Message) validated with Zod (`trim`, length caps, email format); right = studio info (Milan + Lisbon addresses, hours, trade program note). Submit simulates send via `toast.success` and resets — no backend, matching the abstracted-checkout posture. Surface errors inline.
- **`src/routes/__root.tsx`** — extend `<head>` defaults, add `og:type=website` only at root (per head-meta rules). Per-route `head()` titles/descriptions on `/shop`, each `/category/*`, `/about`, `/contact`, and `/product/$id` (dynamic, from loader data). Each leaf gets its own `canonical` + `og:url`.
- **`src/components/site-header.tsx`** — add a "Categories" dropdown (or inline pills on desktop) listing the 4 categories, plus a "Contact" link. Cart pill unchanged.
- **`src/components/site-footer.tsx`** — add a "Shop by room" column linking to category pages, and a "Studio" column linking to About/Contact.

## 4. SEO & metadata

- Each category page sets `title`, `description`, `og:title`, `og:description`, `og:image` (category hero), and `canonical` to `/category/<slug>`.
- Product pages derive `og:image` from `product.image` and `og:type=product`.
- Add `BreadcrumbList` JSON-LD on category and product routes; `Organization` JSON-LD on `__root.tsx`.
- No new sitemap file is added (none exists today; user did not request one).

## 5. Strategic appendix (delivered as a `/about` enhancement section + chat summary, not a separate doc)

The build will include the structural recommendations the user asked about, but kept consistent with what the live site actually does:

- **User journey** baked into the UI: Home → Category tile → Category page → Product → Add to cart → Cart → Checkout (info) → Confirmation. Persistent cart count, "Buy now" shortcut, free white-glove threshold ($1,500), and visible reassurance copy on cart/checkout (lead time, no-payment-now note).
- **Conversion levers** present in the UI: editorial hero, social proof slot on home (atelier strip), category cross-sell on product pages ("You may also like"), low-friction checkout (no account required), trust microcopy.
- **Tech stack note** in the chat reply: this site stays on the current stack (TanStack Start + Tailwind + local cart). A short comparison vs. Shopify / WooCommerce / Webflow will accompany the plan execution so the user has the strategic context they asked for — without forcing a platform change while checkout is intentionally abstracted.
- **Future-ready hooks**: cart context already in place for swapping to a real payment provider (Paddle/Stripe/Shopify) and `auth.users`-based accounts later, without rewriting routes.

## 6. Out of scope (per your answers)

- Real payment gateway / Lovable Cloud / Shopify integration.
- User accounts (signup / login / order history).
- Wishlist, reviews, multi-currency, i18n.

## 7. Technical notes

- New route uses TanStack file convention `src/routes/category.$slug.tsx` → URL `/category/$slug`; `<Link to="/category/$slug" params={{ slug }}>` everywhere (no string interpolation).
- Contact form: client-side Zod only; no network call. Validation errors render inline; success path shows a sonner toast and clears the form.
- Reuse existing `ProductCard`, `formatPrice`, `useCart` — no duplication.
- All colors stay on the Noir & Gold tokens already in `src/styles.css`; no hardcoded hex in components.

---

If this looks right, approve and I'll implement it end-to-end.