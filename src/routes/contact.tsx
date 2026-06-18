import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — KIANVI.DECOR" },
      {
        name: "description",
        content:
          "Reach the KIANVI.DECOR atelier — general inquiries, trade program, press, and custom commissions.",
      },
      { property: "og:title", content: "Contact — KIANVI.DECOR" },
      {
        property: "og:description",
        content:
          "Reach the KIANVI.DECOR atelier between Milan and Lisbon for inquiries, trade, press, and custom work.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const subjects = ["General", "Trade", "Press", "Custom"] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.enum(subjects),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type FormState = z.infer<typeof schema>;
const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "General",
  message: "",
};

function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fe[k]) fe[k] = issue.message;
      }
      setErrors(fe);
      toast.error("Please correct the highlighted fields.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setForm(initial);
    toast.success("Thank you — we'll be in touch shortly.");
  };

  return (
    <div>
      <section className="bg-noir text-cream">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            Contact
          </p>
          <h1 className="mt-6 font-display text-5xl font-light leading-tight md:text-6xl">
            Write to the atelier.
          </h1>
          <p className="mt-6 max-w-xl text-cream/70">
            Whether you're planning a single piece, an entire room, or a trade
            order, we'd be glad to hear from you. We reply within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-5">
        <form onSubmit={onSubmit} className="md:col-span-3 space-y-6">
          <Field label="Name" error={errors.name}>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
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
          <Field label="Subject" error={errors.subject}>
            <div className="flex flex-wrap gap-2">
              {subjects.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => set("subject", s)}
                  className={
                    "rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-colors " +
                    (form.subject === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground")
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </Field>
          <Field label="Message" error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              rows={6}
              className={inputCls}
            />
          </Field>
          <button
            type="submit"
            disabled={sending}
            className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {sending ? "Sending…" : "Send inquiry"}
          </button>
        </form>

        <aside className="md:col-span-2 space-y-8 border-l border-border pl-0 md:pl-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">
              Studios
            </p>
            <ul className="mt-4 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Milan</p>
                  <p className="text-muted-foreground">
                    Via della Spiga 12, 20121 Milano
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Lisbon</p>
                  <p className="text-muted-foreground">
                    Rua das Janelas Verdes 8, 1200-690 Lisboa
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-muted-foreground">
                    Tue–Sat, 10:00 – 18:00 (by appointment)
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">studio@kianvidecor.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 text-sm">
            <p className="font-display text-base">Trade program</p>
            <p className="mt-2 text-muted-foreground">
              Designers, architects, and hospitality partners receive trade
              pricing, white-glove logistics, and dedicated support. Select
              "Trade" above to begin.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground focus:ring-1 focus:ring-foreground";

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
