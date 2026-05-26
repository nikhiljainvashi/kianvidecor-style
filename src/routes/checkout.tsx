import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { formatPrice, useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
});

const schema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  address: z.string().trim().min(1, "Address is required").max(200),
  city: z.string().trim().min(1, "City is required").max(100),
  postal: z.string().trim().min(1, "Postal code is required").max(20),
  country: z.string().trim().min(1, "Country is required").max(100),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postal: "",
  country: "",
  notes: "",
};

function Checkout() {
  const { detailed, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  if (detailed.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-light">Nothing to check out.</h1>
        <Link
          to="/shop"
          className="mt-6 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= 1500 ? 0 : 95;
  const total = subtotal + shipping;

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please correct the highlighted fields.");
      return;
    }
    setSubmitting(true);
    const orderNumber = `KVD-${Date.now().toString(36).toUpperCase()}`;
    // Email confirmation step: abstracted (no real gateway / no email API)
    await new Promise((r) => setTimeout(r, 700));
    clear();
    setSubmitting(false);
    navigate({
      to: "/confirmation",
      search: { order: orderNumber, email: parsed.data.email, name: parsed.data.fullName },
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-light md:text-5xl">Checkout</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Enter your details and we'll send an order confirmation to your inbox.
        Our atelier will follow up to arrange payment and white-glove delivery.
      </p>

      <form onSubmit={onSubmit} className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <Section title="Contact">
            <Field label="Full name" error={errors.fullName}>
              <input
                value={form.fullName}
                onChange={(e) => set("fullName", e.target.value)}
                className={inputCls}
                autoComplete="name"
              />
            </Field>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputCls}
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone (optional)" error={errors.phone}>
                <input
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={inputCls}
                  autoComplete="tel"
                />
              </Field>
            </div>
          </Section>

          <Section title="Shipping address">
            <Field label="Street address" error={errors.address}>
              <input
                value={form.address}
                onChange={(e) => set("address", e.target.value)}
                className={inputCls}
                autoComplete="street-address"
              />
            </Field>
            <div className="grid gap-6 sm:grid-cols-3">
              <Field label="City" error={errors.city}>
                <input
                  value={form.city}
                  onChange={(e) => set("city", e.target.value)}
                  className={inputCls}
                  autoComplete="address-level2"
                />
              </Field>
              <Field label="Postal code" error={errors.postal}>
                <input
                  value={form.postal}
                  onChange={(e) => set("postal", e.target.value)}
                  className={inputCls}
                  autoComplete="postal-code"
                />
              </Field>
              <Field label="Country" error={errors.country}>
                <input
                  value={form.country}
                  onChange={(e) => set("country", e.target.value)}
                  className={inputCls}
                  autoComplete="country-name"
                />
              </Field>
            </div>
            <Field label="Delivery notes (optional)" error={errors.notes}>
              <textarea
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                rows={3}
                className={inputCls}
              />
            </Field>
          </Section>
        </div>

        <aside className="h-fit rounded-lg border border-border bg-card p-6">
          <h2 className="font-display text-lg">Your order</h2>
          <ul className="mt-6 divide-y divide-border">
            {detailed.map((i) => (
              <li key={i.id} className="flex gap-3 py-3">
                <div className="h-16 w-14 shrink-0 overflow-hidden bg-muted">
                  <img src={i.product.image} alt={i.product.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between text-sm">
                  <span className="font-medium">{i.product.name}</span>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Qty {i.qty}</span>
                    <span>{formatPrice(i.lineTotal)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Shipping</dt>
              <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-2 font-display text-base">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {submitting ? "Sending confirmation…" : "Place order"}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            No payment is taken now. Our atelier will reach out to arrange it.
          </p>
        </aside>
      </form>
    </div>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground focus:ring-1 focus:ring-foreground";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-5">
      <h2 className="font-display text-lg">{title}</h2>
      {children}
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
