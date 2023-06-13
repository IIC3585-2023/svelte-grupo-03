import type { Ingredient } from "./ingredient";
import type { AnalyzedInstructions } from "./analyzedInstructions";

export default interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  likes: number;
  missedIngredients?: Ingredient[];
  usedIngredients?: Ingredient[];
  extendedIngredients?: Ingredient[];
  readyInMinutes?: number;
  servings?: number;
  summary?: string;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  veryHealthy?: boolean;
  cheap?: boolean;
  veryPopular?: boolean;
  sustainable?: boolean;
  lowFodmap?: boolean;
  sourceName?: string;
  analyzedInstructions?: AnalyzedInstructions[];
}