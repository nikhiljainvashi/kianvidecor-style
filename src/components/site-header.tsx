import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-semibold tracking-[0.18em]">
          KIANVI<span className="text-accent">.</span>DECOR
        </Link>
        <nav className="hidden items-center gap-9 text-sm md:flex">
          <Link to="/" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
            Home
          </Link>
          <Link to="/shop" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
            Shop
          </Link>
          <Link to="/about" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
            Atelier
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
