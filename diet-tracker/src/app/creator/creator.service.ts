import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "./ingredients/ingredient-list/ingredient/ingredient.model";

@Injectable({providedIn: "root"})
export class CreatorService {
    private ingredients: Ingredient[] = [];
    private recipeIngredients: Ingredient[] = [];
    private ingredientsUpdated = new Subject<Ingredient[]>();
    private recipeIngredientsUpdated = new Subject<Ingredient[]>();

    constructor() {};

    getIngredients() {
        return [...this.ingredients];
    }

    getRecipeIngredients() {
        return [...this.recipeIngredients];
    }

    getIngredientUpdateListener() {
        return this.ingredientsUpdated.asObservable();
    }

    getRecipeIngredientUpdateListener() {
        return this.recipeIngredientsUpdated.asObservable();
    }

    addIngredient(name: string, calorie: number, pictureUrl: string) {
        const ingredient: Ingredient = {name: name, calAmount: calorie, pictureUrl: pictureUrl};
        this.ingredients.push(ingredient);
        this.ingredientsUpdated.next([...this.ingredients]);
    }

    addRecipeIngredient(newIngredient: Ingredient) {
        //const ingredient: Ingredient = {name: name, calAmount: calorie, pictureUrl: pictureUrl};
        this.recipeIngredients.push(newIngredient);
        this.recipeIngredientsUpdated.next([...this.recipeIngredients]); 
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }
}