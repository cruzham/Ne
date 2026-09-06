'use client';
import { useEffect, useState } from 'react';
import { generateStrategies } from '@/lib/strategy';
import { useRouter } from 'next/navigation';

export default function StrategyPage() {
  const [strategies, setStrategies] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('nexora_intent');
    if (!saved) return router.push('/intent');
    setStrategies(generateStrategies(JSON.parse(saved)));
  }, [router]);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🧠 Strategy Lab</h1>
        <div className="space-y-4">
          {strategies.map((s) => (
            <div key={s.id} onClick={() => setSelected(s.id)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition ${
                selected === s.id ? 'border-blue-500 bg-blue-950/30' : 'border-gray-700 bg-gray-900'
              } ${s.is_recommended ? 'ring-2 ring-green-500/50' : ''}`}>
              <h3 className="text-xl font-semibold">{s.name} {s.is_recommended && '⭐ Recommended'}</h3>
              <p className="text-gray-400 mt-1">{s.description}</p>
              <p className="mt-3">💰 ${s.cost_min}–${s.cost_max} | 👥 {s.expected_min}–{s.expected_max} users | ⚠️ {s.risk} risk</p>
            </div>
          ))}
        </div>
        <button onClick={() => selected && router.push('/dashboard')} disabled={!selected}
          className="mt-8 w-full bg-blue-600 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 disabled:opacity-50">
          Build Plan →
        </button>
      </div>
    </main>
  );
}

