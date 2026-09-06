import { z } from 'zod';

const IntentSchema = z.object({
  objective: z.string(),
  target_value: z.number(),
  deadline_days: z.number(),
  budget: z.number(),
  currency: z.string().default('USD'),
  location: z.string().optional(),
  success_metric: z.string().default('new_users'),
});

export async function parseIntent(rawInput: string) {
  const budgetMatch = rawInput.match(/\$(\d+(?:,\d+)*)/);
  const daysMatch = rawInput.match(/(\d+)\s*(day|days)/i);
  const targetMatch = rawInput.match(/(\d+)\s*(user|users|people)/i);
  const locationMatch = rawInput.match(/in\s+([A-Za-z\s]+?)(?:\s+within|$)/i);

  const parsed = {
    objective: 'Acquire users',
    target_value: targetMatch ? parseInt(targetMatch[1]) : 1000,
    deadline_days: daysMatch ? parseInt(daysMatch[1]) : 30,
    budget: budgetMatch ? parseInt(budgetMatch[1].replace(/,/g, '')) : 500,
    currency: 'USD',
    location: locationMatch ? locationMatch[1].trim() : undefined,
    success_metric: 'new_users',
  };

  const result = IntentSchema.safeParse(parsed);
  if (!result.success) throw new Error('Could not parse intent');
  return { ...result.data, raw_input: rawInput, assumptions: ['App exists'], unknowns: ['Current users'] };
}

