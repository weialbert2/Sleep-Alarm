import type { Metadata } from "next";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse all FitSleeps sleep products: vibrating alarms, nose strips, mouth tape, sleep masks, and more.",
};

const categories = [
  { id: "all", label: "All Products" },
  { id: "alarm", label: "Alarms" },
  { id: "accessory", label: "Accessories" },
  { id: "bundle", label: "Bundles" },
];

export default function CollectionsPage() {
  const mainProducts = products.filter((p) => p.category !== "digital");

  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-surface-muted border-b border-border py-10">
        <div className="container-site text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
            Shop All Products
          </h1>
          <p className="text-lg text-text-muted">
            Every product backed by our 100-Night Wake-Up Guarantee
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-pill text-sm font-semibold border transition-colors ${
                cat.id === "all"
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-text-body border-border hover:border-brand hover:text-brand"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mainProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
