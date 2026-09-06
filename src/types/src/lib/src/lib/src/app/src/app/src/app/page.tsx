import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-7xl font-bold mb-6">NEXORA</h1>
        <p className="text-2xl text-gray-300 mb-8">Turn human intent into measurable outcomes.</p>
        <Link href="/intent" className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
          🚀 Start an Intent →
        </Link>
      </div>
    </main>
  );
}

