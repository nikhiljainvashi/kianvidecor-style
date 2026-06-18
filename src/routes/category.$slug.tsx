import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import {
  categoryMeta,
  categorySlugs,
  products,
  type CategorySlug,
} from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/category/$slug")({
  component: CategoryPage,
  loader: ({ params }) => {
    const slug = params.slug as CategorySlug;
    const meta = categoryMeta[slug];
    if (!meta) throw notFound();
    const list = products.filter((p) => p.category === meta.label);
    return { slug, meta, list };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { slug, meta } = loaderData;
    const title = `${meta.label} — KIANVI.DECOR`;
    return {
      meta: [
        { title },
        { name: "description", content: meta.description },
        { property: "og:title", content: title },
        { property: "og:description", content: meta.description },
        { property: "og:image", content: meta.image },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/category/${slug}` },
      ],
      links: [{ rel: "canonical", href: `/category/${slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Shop", item: "/shop" },
              {
                "@type": "ListItem",
                position: 3,
                name: meta.label,
                item: `/category/${slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
});

function CategoryPage() {
  const { slug, meta, list } = Route.useLoaderData();
  const otherSlugs = categorySlugs.filter((s) => s !== slug);

  return (
    <div>
      <section className="bg-noir text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-6 flex flex-col justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-cream/60 hover:text-[color:var(--gold)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All collections
            </Link>
            <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              The Collection
            </p>
            <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] md:text-6xl">
              {meta.label}.
            </h1>
            <p className="mt-3 font-display text-xl italic text-[color:var(--gold)]">
              {meta.tagline}
            </p>
            <p className="mt-6 max-w-md text-sm text-cream/70">
              {meta.description}
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={meta.image}
                alt={meta.label}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Pair it with
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {otherSlugs.map((s) => {
            const m = categoryMeta[s];
            return (
              <Link
                key={s}
                to="/category/$slug"
                params={{ slug: s }}
                className="group relative aspect-[4/3] overflow-hidden bg-muted"
              >
                <img
                  src={m.image}
                  alt={m.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-cream">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cream/70">
                    Shop
                  </p>
                  <p className="font-display text-lg">{m.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
