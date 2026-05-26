import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            {product.category}
          </p>
          <h3 className="mt-1 font-display text-base font-medium group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </div>
        <span className="font-display text-sm font-medium">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
