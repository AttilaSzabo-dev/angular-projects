import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe("Tasty Scnitzel",
                "A super-tasty Snitzel - just awesome!",
                "https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg",
                [
                    new Ingredient("Meat", 1),
                    new Ingredient("French Fries", 20)
                ]),
        new Recipe("Big Fat Burger",
                "What else you need to say?",
                "https://kep.cdn.indexvas.hu/1/0/3032/30329/303292/30329287_f0a7269532d4fe0e03f1e2dea847be7c_wm.jpg",
                [
                    new Ingredient("Buns", 2),
                    new Ingredient("Meat", 1),
                ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}