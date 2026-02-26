import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-black text-brand mb-4">404</h1>
      <h2 className="text-2xl font-bold text-text-primary mb-3">Page Not Found</h2>
      <p className="text-text-muted mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="btn-primary">Go Home</Link>
        <Link href="/collections/all" className="btn-secondary">Shop Products</Link>
      </div>
    </div>
  );
}
