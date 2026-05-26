import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { formatPrice, useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const { detailed, subtotal, setQty, remove } = useCart();

  if (detailed.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-light">Your cart is empty.</h1>
        <p className="mt-3 text-muted-foreground">
          Begin with a piece you'd return to.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Browse the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-light md:text-5xl">Your cart</h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <ul className="divide-y divide-border lg:col-span-2">
          {detailed.map((item) => (
            <li key={item.id} className="flex gap-6 py-6">
              <Link to="/product/$id" params={{ id: item.id }} className="h-32 w-24 shrink-0 overflow-hidden bg-muted">
                <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {item.product.category}
                    </p>
                    <Link
                      to="/product/$id"
                      params={{ id: item.id }}
                      className="font-display text-lg hover:text-accent"
                    >
                      {item.product.name}
                    </Link>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label="Remove"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-auto flex items-end justify-between pt-4">
                  <div className="inline-flex items-center rounded-full border border-border">
                    <button
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="p-2 text-muted-foreground hover:text-foreground"
                      aria-label="Decrease"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="p-2 text-muted-foreground hover:text-foreground"
                      aria-label="Increase"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="font-display text-base">{formatPrice(item.lineTotal)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-lg border border-border bg-card p-6">
          <h2 className="font-display text-lg">Order summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Shipping</dt>
              <dd>{subtotal >= 1500 ? "Free" : formatPrice(95)}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 font-display text-base">
              <dt>Total</dt>
              <dd>{formatPrice(subtotal + (subtotal >= 1500 ? 0 : 95))}</dd>
            </div>
          </dl>
          <Link
            to="/checkout"
            className="mt-6 block rounded-full bg-foreground px-6 py-3 text-center text-sm font-medium text-background hover:opacity-90"
          >
            Continue to checkout
          </Link>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Email confirmation. No payment gateway in this preview.
          </p>
        </aside>
      </div>
    </div>
  );
}
