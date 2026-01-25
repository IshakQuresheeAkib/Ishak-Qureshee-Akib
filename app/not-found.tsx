import Link from "next/link";

export default function NotFound(): React.ReactElement {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-8">Page Not Found</h2>
      <p className="text-white/70 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary rounded-lg hover:bg-secondary transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
