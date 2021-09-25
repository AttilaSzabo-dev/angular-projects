import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "./ingredients/ingredient-list/ingredient/ingredient.model";
import { Recipe } from "./recipes/recipe-list/recipe/recipe.model";
import { RecipeIngredient } from "./recipes/recipe-list/recipe/recipeIngredient.model";

@Injectable({providedIn: "root"})
export class CreatorService {
    private ingredients: Ingredient[] = [];
    private ingredientsUpdated = new Subject<Ingredient[]>();
    private recipeIngredients: Ingredient[] = [];
    private recipeIngredientsUpdated = new Subject<Ingredient[]>();
    private recipes: Recipe[] = [];
    private recipesUpdated = new Subject<Recipe[]>();
    

    constructor() {};

    // ingredients
    getIngredients() {
        return [...this.ingredients];
    }

    getIngredientUpdateListener() {
        return this.ingredientsUpdated.asObservable();
    }

    addIngredient(name: string, calorie: number, pictureUrl: string) {
        const ingredient: Ingredient = {name: name, calAmount: calorie, pictureUrl: pictureUrl};
        this.ingredients.push(ingredient);
        //const ingredientIndex = this.ingredients.length - 1;// adatbázisnál újra kell ezt gondolni
        //this.ingredients[ingredientIndex].id = ingredientIndex;// adatbázisnál újra kell ezt gondolni
        this.ingredientsUpdated.next([...this.ingredients]);
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    // recipeIngredients
    getRecipeIngredients() {
        return [...this.recipeIngredients];
    }

    getRecipeIngredientUpdateListener() {
        return this.recipeIngredientsUpdated.asObservable();
    }

    addRecipeIngredient(newIngredient: Ingredient, index: number) {
        newIngredient.id = index;
        this.recipeIngredients.push(newIngredient);
        this.recipeIngredientsUpdated.next([...this.recipeIngredients]);
    }

    deleteRecipeIngredient(index: number) {
        this.recipeIngredients.splice(index, 1);
        this.recipeIngredientsUpdated.next(this.recipeIngredients.slice());
    }

    // recipes
    getRecipes() {
        return [...this.recipes];
    }

    getRecipesUpdateListener() {
        return this.recipesUpdated.asObservable();
    }

    addRecipe(name: string, pictureUrl: string, allCal: number, allWeight: number, ingredients: RecipeIngredient[]) {
        const recipe: Recipe = {recipeName: name, recipePictureUrl: pictureUrl, allCal: allCal, allWeight: allWeight, ingredients: ingredients};
        this.recipes.push(recipe);
        this.recipesUpdated.next([...this.recipes]);
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesUpdated.next(this.recipes.slice());
    }

    // common
    getIngredient(index: number) {
        return this.ingredients[index];
    }
}