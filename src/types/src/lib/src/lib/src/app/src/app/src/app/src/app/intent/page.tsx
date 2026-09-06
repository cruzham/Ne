'use client';
import { useState } from 'react';
import { parseIntent } from '@/lib/parser';
import { useRouter } from 'next/navigation';

export default function IntentPage() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [parsed, setParsed] = useState<any>(null);
  const router = useRouter();

  async function handleCompile() {
    setLoading(true);
    try {
      setParsed(await parseIntent(input));
    } catch { alert('Please rephrase.'); }
    setLoading(false);
  }

  function confirm() {
    localStorage.setItem('nexora_intent', JSON.stringify(parsed));
    router.push('/strategy');
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">What do you want to accomplish?</h1>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Get my app to 1,000 users in Kampala within 30 days with a $500 budget."
          className="w-full h-32 p-4 rounded-lg bg-gray-900 border border-gray-700 text-white text-lg"
        />
        <button onClick={handleCompile} disabled={loading || !input}
          className="mt-4 bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 disabled:opacity-50">
          {loading ? 'Compiling...' : 'COMPILE INTENT'}
        </button>
        {parsed && (
          <div className="mt-8 p-6 bg-gray-900 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold mb-4">✅ Parsed Intent</h2>
            <pre className="text-sm text-gray-300">{JSON.stringify(parsed, null, 2)}</pre>
            <button onClick={confirm} className="mt-6 bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-500">
              Confirm & Generate Strategies →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

