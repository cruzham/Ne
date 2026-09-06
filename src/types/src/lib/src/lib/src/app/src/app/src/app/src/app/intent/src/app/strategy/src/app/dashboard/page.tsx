'use client';

export default function Dashboard() {
  const progress = 43.7;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🎯 Mission Control</h1>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 mb-6">
          <h2 className="text-xl font-semibold mb-2">Objective: 1,000 Users</h2>
          <p className="text-5xl font-bold mt-2">{Math.round(progress)}%</p>
          <div className="w-full bg-gray-700 rounded-full h-4 mt-3">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-4 text-gray-400">📅 18 days remaining | 💰 $327 remaining | 👥 437 / 1,000</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border-2 border-red-600/50">
          <h3 className="font-semibold text-red-400 mb-2">⚠ Bottleneck: Retention at 22% below target</h3>
          <p className="text-gray-300">Recommendation: Test shorter onboarding flow.</p>
          <button className="mt-4 bg-blue-600 px-6 py-2.5 rounded-lg hover:bg-blue-500">🔥 Recompile Strategy</button>
        </div>
      </div>
    </main>
  );
}

