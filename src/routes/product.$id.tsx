import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import { getProduct, products } from "@/lib/products";
import { formatPrice, useCart } from "@/lib/cart";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/product/$id")({
  component: ProductDetail,
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to shop
      </Link>

      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl font-light md:text-5xl">{product.name}</h1>
          <p className="mt-6 font-display text-2xl">{formatPrice(product.price)}</p>
          <p className="mt-8 text-muted-foreground">{product.description}</p>

          <ul className="mt-8 space-y-2 text-sm">
            {product.details.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-3">
            <button
              onClick={() => {
                add(product.id);
                toast.success(`${product.name} added to cart`);
              }}
              className="flex-1 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                add(product.id);
                navigate({ to: "/checkout" });
              }}
              className="flex-1 rounded-full border border-foreground px-6 py-3.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Buy now
            </button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Free white-glove delivery on orders over $1,500. Ships in 2–4 weeks.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-32">
          <h2 className="font-display text-2xl font-light">You may also like</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
