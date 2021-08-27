import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "./ingredients/ingredient-list/ingredient/ingredient.model";

@Injectable({providedIn: "root"})
export class CreatorService {
    private ingredients: Ingredient[] = [];
    private ingredientsUpdated = new Subject<Ingredient[]>();

    constructor() {};

    getIngredients() {
        return [...this.ingredients];
    }

    getIngredientUpdateListener() {
        return this.ingredientsUpdated.asObservable();
    }

    addIngredient(name: string, calorie: number, pictureUrl: string) {
        const ingredient: Ingredient = {name: name, calAmount: calorie, pictureUrl: pictureUrl};
        this.ingredients.push(ingredient);
        this.ingredientsUpdated.next([...this.ingredients]);
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