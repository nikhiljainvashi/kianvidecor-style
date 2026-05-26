export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-lg font-semibold tracking-[0.18em]">
            KIANVI<span className="text-accent">.</span>DECOR
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Considered furniture and decor, sourced and made for spaces that
            reward a second look.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Shop
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Seating</li>
            <li>Tables</li>
            <li>Lighting</li>
            <li>Decor</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Atelier
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Showroom</li>
            <li>Trade program</li>
            <li>Care guide</li>
            <li>Contact</li>
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
