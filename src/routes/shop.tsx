import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({
  component: Shop,
});

function Shop() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            The Collection
          </p>
          <h1 className="mt-3 font-display text-4xl font-light md:text-6xl">
            Shop the atelier.
          </h1>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          A small, curated selection — updated each season. Free white-glove
          delivery on orders over $1,500.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-2 border-b border-border pb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-colors",
              active === c
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
