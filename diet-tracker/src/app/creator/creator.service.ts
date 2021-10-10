import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { Ingredient } from "./ingredients/ingredient-list/ingredient/ingredient.model";
import { Recipe } from "./recipes/recipe-list/recipe/recipe.model";
import { RecipeIngredient } from "./recipes/recipe-list/recipe/recipeIngredient.model";

@Injectable({providedIn: "root"})
export class CreatorService {
    private ingredients: Ingredient[] = [];
    private ingredientUpdated = new Subject<Ingredient[]>();
    private recipeIngredients: Ingredient[] = [];
    private recipeIngredientsUpdated = new Subject<Ingredient[]>();
    private recipes: Recipe[] = [];
    private recipesUpdated = new Subject<Recipe[]>();
    

    constructor(private http: HttpClient) {};

    // ingredients
    /* getIngredients() {
        return [...this.ingredients];
    } */
    getIngredients() {
        this.http
            .get<{message: string, ingredients: any}>(
                "http://localhost:3000/api/ingredients"
            )
            .pipe(map((ingredientData) => {
                return ingredientData.ingredients.map( ingredient => {
                    return {
                        name: ingredient.name,
                        calAmount: ingredient.calAmount,
                        pictureUrl: ingredient.pictureUrl,
                        id: ingredient._id
                    };
                });
            }))
            .subscribe(transformedIngredients => {
                this.ingredients = transformedIngredients;
                this.ingredientUpdated.next([...this.ingredients]);
            });
    }

    getIngredientUpdateListener() {
        return this.ingredientUpdated.asObservable();
    }

    //addIngredient(name: string, calorie: number, pictureUrl: string) {
        //const ingredient: Ingredient = {name: name, calAmount: calorie, pictureUrl: pictureUrl};
        //this.ingredients.push(ingredient);
        //const ingredientIndex = this.ingredients.length - 1;// adatbázisnál újra kell ezt gondolni
        //this.ingredients[ingredientIndex].id = ingredientIndex;// adatbázisnál újra kell ezt gondolni
        //this.ingredientUpdated.next([...this.ingredients]);
    //}

    addIngredient(name: string, calorie: number, pictureUrl: string) {
        const ingredient: Ingredient = {name: name, calAmount: calorie, pictureUrl: pictureUrl, id: null};
        this.http
             .post<{message: string, ingredientId: string}>("http://localhost:3000/api/ingredients", ingredient)
             .subscribe((responseData)=> {
                 const id = responseData.ingredientId;
                 ingredient.id = id;
                 this.ingredients.push(ingredient);
                 this.ingredientUpdated.next([...this.ingredients]);
             });
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientUpdated.next(this.ingredients.slice());
    }

    /* deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientUpdated.next(this.ingredients.slice());
    } */

    deleteIngredient(ingredientId: string) {
        this.http.delete("http://localhost:3000/api/ingredients/" + ingredientId)
            .subscribe(() => {
                const updatedIngredients = this.ingredients.filter(ingredient => ingredient.id !== ingredientId);
                this.ingredients = updatedIngredients;
                this.ingredientUpdated.next([...this.ingredients]);
            });
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
    /* getRecipes() {
        return [...this.recipes];
    } */

    getRecipes() {
        this.http
            .get<{message: string, recipes: any}>(
                "http://localhost:3000/api/recipes"
            )
            .pipe(map((recipeData) => {
                return recipeData.recipes.map( recipe => {
                    return {
                        recipeName: recipe.recipeName,
                        recipePictureUrl: recipe.recipePictureUrl,
                        allCal: recipe.allCal,
                        allWeight: recipe.allWeight,
                        ingredients: recipe.ingredients,
                        id: recipe._id
                    };
                });
            }))
            .subscribe(transformedRecipes => {
                this.recipes = transformedRecipes;
                this.recipesUpdated.next([...this.recipes]);
            });
    }

    getRecipesUpdateListener() {
        return this.recipesUpdated.asObservable();
    }

    /* addRecipe(name: string, pictureUrl: string, allCal: number, allWeight: number, ingredients: RecipeIngredient[]) {
        const recipe: Recipe = {recipeName: name, recipePictureUrl: pictureUrl, allCal: allCal, allWeight: allWeight, ingredients: ingredients};
        this.recipes.push(recipe);
        this.recipesUpdated.next([...this.recipes]);
    } */

    addRecipe(recipeName: string, recipePictureUrl: string, allCal: number, allWeight: number, ingredients: RecipeIngredient[]) {
        const recipe: Recipe = {recipeName: recipeName, recipePictureUrl: recipePictureUrl, allCal: allCal, allWeight: allWeight, ingredients: ingredients, id: null};
        this.http
             .post<{message: string, recipeId: string}>("http://localhost:3000/api/recipes", recipe)
             .subscribe((responseData)=> {
                 const id = responseData.recipeId;
                 recipe.id = id;
                 this.recipes.push(recipe);
                 this.recipesUpdated.next([...this.recipes]);
             });
    }

    /* deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesUpdated.next(this.recipes.slice());
    } */

    deleteRecipe(recipeId: string) {
        this.http.delete("http://localhost:3000/api/recipes/" + recipeId)
            .subscribe(() => {
                const updatedRecipes = this.recipes.filter(recipe => recipe.id !== recipeId);
                this.recipes = updatedRecipes;
                this.recipesUpdated.next([...this.recipes]);
            });
    }

    // common
    getIngredient(index: number) {
        return this.ingredients[index];
    }
}