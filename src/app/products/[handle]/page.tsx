import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductByHandle } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ComparisonTable from "@/components/product/ComparisonTable";
import ProductReviews from "@/components/product/ProductReviews";
import FAQSection from "@/components/home/FAQSection";
import GuaranteeSection from "@/components/home/GuaranteeSection";
import ProductCard from "@/components/ui/ProductCard";
import { alarmProducts } from "@/data/products";

interface PageProps {
  params: { handle: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductByHandle(params.handle);
  if (!product) return {};

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : null;

  return {
    title: `${product.name} — 100% Wake-Up Guarantee`,
    description: `${product.shortDescription} ${discount ? `Save ${discount}%.` : ""} 100-night money-back guarantee. Free shipping over $50.`,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductByHandle(params.handle);
  if (!product) notFound();

  const related = alarmProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      {/* Product hero */}
      <section className="py-10 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-14">
            <ProductGallery images={product.images} productName={product.name} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      {/* Product description */}
      {product.description && (
        <section className="py-section-sm bg-surface-muted">
          <div className="container-site max-w-3xl">
            <h2 className="text-2xl font-bold text-text-primary mb-5">About This Product</h2>
            <div className="prose prose-slate max-w-none text-text-body leading-relaxed whitespace-pre-line text-base">
              {product.description}
            </div>
          </div>
        </section>
      )}

      {/* Full features */}
      {product.features && product.features.length > 0 && (
        <section className="py-section-sm bg-white">
          <div className="container-site">
            <h2 className="text-2xl font-bold text-text-primary mb-8">What You Get</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 bg-surface-muted rounded-card p-4 border border-border">
                  <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-text-body leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ComparisonTable />
      <ProductReviews />
      <FAQSection />
      <GuaranteeSection />

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-section bg-surface-muted">
          <div className="container-site">
            <h2 className="section-heading mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
