import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Mail } from "lucide-react";
import { z } from "zod";

const search = z.object({
  order: z.string().optional(),
  email: z.string().optional(),
  name: z.string().optional(),
});

export const Route = createFileRoute("/confirmation")({
  component: Confirmation,
  validateSearch: search,
});

function Confirmation() {
  const { order, email, name } = Route.useSearch();

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <Check className="h-6 w-6" />
      </div>
      <h1 className="mt-8 font-display text-4xl font-light md:text-5xl">
        Thank you{name ? `, ${name.split(" ")[0]}` : ""}.
      </h1>
      <p className="mt-4 text-muted-foreground">
        Your order has been received. A confirmation has been sent to
        {email ? <span className="text-foreground"> {email}</span> : " your inbox"}.
      </p>

      <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 text-sm">
        <Mail className="h-4 w-4 text-accent" />
        <span className="text-muted-foreground">Order number</span>
        <span className="font-display tracking-wider">{order ?? "—"}</span>
      </div>

      <p className="mx-auto mt-10 max-w-md text-sm text-muted-foreground">
        Our atelier will reach out within one business day to confirm
        availability, arrange payment, and schedule white-glove delivery.
      </p>

      <div className="mt-10 flex justify-center gap-3">
        <Link
          to="/shop"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Continue browsing
        </Link>
        <Link
          to="/"
          className="rounded-full border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
