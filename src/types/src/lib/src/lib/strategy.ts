export function generateStrategies(intent: any) {
  return [
    { id: 'a', name: 'Organic Growth', description: 'Content & community', cost_min: 30, cost_max: 50, expected_min: 300, expected_max: 600, risk: 'medium' as const, is_recommended: false },
    { id: 'b', name: 'Creator Partnerships', description: 'Kampala influencers', cost_min: 150, cost_max: 200, expected_min: 700, expected_max: 1300, risk: 'medium' as const, is_recommended: true },
    { id: 'c', name: 'Paid Acquisition', description: 'Targeted ads', cost_min: 400, cost_max: 500, expected_min: 800, expected_max: 1500, risk: 'high' as const, is_recommended: false },
  ];
}

