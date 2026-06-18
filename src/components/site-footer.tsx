import { Link } from "@tanstack/react-router";
import { categoryMeta, categorySlugs } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-lg font-semibold tracking-[0.18em]">
            KIANVI<span className="text-accent">.</span>DECOR
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Considered furniture, made slowly between Milan and Lisbon for
            spaces that reward a second look.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Shop by room
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {categorySlugs.map((slug) => (
              <li key={slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug }}
                  className="hover:text-accent"
                >
                  {categoryMeta[slug].label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/shop" className="hover:text-accent">
                All collections
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Studio
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-accent">
                Atelier
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Trade program
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} KIANVI.DECOR. All rights reserved.</span>
          <span>Crafted with restraint.</span>
        </div>
      </div>
    </footer>
  );
}
