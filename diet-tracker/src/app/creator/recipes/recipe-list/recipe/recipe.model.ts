import { RecipeIngredient } from "./recipeIngredient.model";

export interface Recipe {
    recipeName: string;
    recipePictureUrl: string;
    allCal: number;
    allWeight: number;
    ingredients: RecipeIngredient[];
    id?: number;
}