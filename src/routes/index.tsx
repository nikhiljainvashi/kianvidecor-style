import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-noir text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-24 pb-32 md:grid-cols-12 md:pt-32">
          <div className="md:col-span-6 flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              Collection N°07 — Quiet Materials
            </p>
            <h1 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-7xl">
              Furniture for the
              <br />
              <span className="italic text-[color:var(--gold)]">considered</span> home.
            </h1>
            <p className="mt-6 max-w-md text-base text-cream/70">
              Sculpted seating, monolithic tables, and lighting made to soften
              the hours. Shipped from our atelier to your floor.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-noir transition-transform hover:translate-x-0.5"
              >
                Shop the collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="text-sm text-cream/80 underline-offset-4 hover:underline">
                About the atelier
              </Link>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
                alt="A sculpted lounge chair in a sunlit room"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-cream/80">
                <span className="uppercase tracking-widest">Lumen Lounge Chair</span>
                <span className="font-display text-sm">No. 01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Featured
            </p>
            <h2 className="mt-3 font-display text-3xl font-light md:text-4xl">
              Pieces we're quietly proud of.
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Editorial split */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div className="aspect-[5/6] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80"
            alt="A still life of stoneware vessels"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">
            The Atelier
          </p>
          <h2 className="mt-4 font-display text-3xl font-light md:text-5xl">
            Made slowly. Sent thoughtfully.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Every piece is finished by hand in our workshop outside Milan.
            We work in small runs with quiet materials — oak, travertine,
            blackened brass, linen — and ship directly to your door.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm hover:border-accent hover:text-accent"
          >
            Inside the workshop <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
