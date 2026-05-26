import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <section className="bg-noir text-cream">
        <div className="mx-auto max-w-5xl px-6 py-28">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            The Atelier
          </p>
          <h1 className="mt-6 font-display text-5xl font-light leading-tight md:text-7xl">
            Quiet rooms begin
            <br /> with quiet things.
          </h1>
          <p className="mt-8 max-w-xl text-cream/70">
            KIANVI.DECOR is a small studio working between Milan and Lisbon.
            We design and source furniture, lighting, and objects with the
            patience of an old workshop and the eye of a contemporary editor.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80"
            alt="Workshop detail"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-light md:text-4xl">
            A short list of materials. A longer list of opinions.
          </h2>
          <p className="mt-6 text-muted-foreground">
            We work in oak, walnut, travertine, blackened brass, and natural
            linen. We avoid trend-driven finishes. Each piece is made in small
            runs, numbered, and shipped directly from the workshop.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Designed and finished by hand",
              "Small-batch production",
              "White-glove delivery worldwide",
              "Trade program available on request",
            ].map((t) => (
              <li key={t} className="border-b border-border pb-3">{t}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
