interface Step {
  step: string;
  number: number;
  equipment: { name: string; }[];
  ingredients: { name: string; }[];
}

export interface AnalyzedInstructions {
  name: string;
  steps: Step[];
}