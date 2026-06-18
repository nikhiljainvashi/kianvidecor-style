import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { categoryMeta, categorySlugs } from "@/lib/products";

export function SiteHeader() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-semibold tracking-[0.18em]">
          KIANVI<span className="text-accent">.</span>DECOR
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link to="/" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
            Home
          </Link>
          <div className="group relative">
            <Link
              to="/shop"
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              Shop
            </Link>
            <div className="invisible absolute left-1/2 z-50 mt-3 w-56 -translate-x-1/2 rounded-md border border-border bg-popover p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {categorySlugs.map((slug) => (
                <Link
                  key={slug}
                  to="/category/$slug"
                  params={{ slug }}
                  className="block rounded px-3 py-2 text-sm text-muted-foreground hover:bg-accent/10 hover:text-accent"
                >
                  {categoryMeta[slug].label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
            Atelier
          </Link>
          <Link to="/contact" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
            Contact
          </Link>
        </nav>
        <Link
          to="/cart"
          className="relative inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm transition-colors hover:border-accent"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Cart</span>
          {count > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-semibold text-accent-foreground">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
