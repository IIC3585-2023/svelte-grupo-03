export interface Ingredient {
  id: number;
  amount: number;
  unit: string;
  unitLong?: string;
  unitShort?: string;
  aisle: string;
  name: string;
  nameClean?: string;
  original: string;
  originalString?: string;
  originalName: string;
  metaInformation: string[];
  meta: string[];
  image: string;
  consistency?: string;
  measures: { metric: { amount: number; unitShort: string; unitLong: string } }
}