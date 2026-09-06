export type Intent = {
  id: string;
  raw_input: string;
  objective: string;
  target_value: number;
  deadline: Date;
  budget: number;
  currency: string;
  location?: string;
  status: 'compiling' | 'active' | 'paused' | 'completed' | 'failed';
  confidence: number;
  created_at: Date;
};

export type Strategy = {
  id: string;
  intent_id: string;
  name: string;
  description: string;
  cost_min: number;
  cost_max: number;
  expected_min: number;
  expected_max: number;
  risk: 'low' | 'medium' | 'high';
  is_recommended: boolean;
  approved: boolean;
};

