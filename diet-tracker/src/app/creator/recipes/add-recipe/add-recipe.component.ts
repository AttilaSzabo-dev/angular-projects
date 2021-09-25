import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CreatorService } from '../../creator.service';
import { Ingredient } from '../../ingredients/ingredient-list/ingredient/ingredient.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  recipeIngredientsForm: FormGroup;
  recipeIngredients: Ingredient[] = [];
  private recipeIngredientsSub: Subscription;
  calArray = [];
  //incomingCalValue = 0;
  finalCal = 0;
  finalWeight = 0;

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {
    this.initForm();
    this.recipeIngredients = this.creatorService.getRecipeIngredients();
    this.recipeIngredientsSub = this.creatorService.getRecipeIngredientUpdateListener() 
      .subscribe((ingredients: Ingredient[]) => {
        this.recipeIngredients = ingredients;
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.recipeIngredientsForm.get("ingredients")).push(control);
      });
    /* this.recipeIngredientsForm.get("ingredients").valueChanges.subscribe(val => {
      console.log(val);
      this.incomingCalValue = +val;
    }); */
  }

  private initForm() {
    this.recipeIngredientsForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      pictureUrl: new FormControl(),
      ingredients: new FormArray([])
    });
  }

  inputChanged(event: any) {
    const inputId = +event.target.getAttribute('ng-reflect-name');
    const inputWeightValue = +event.target.value;
    
    if(inputId < this.calArray.length) {
      this.calArray[inputId] = inputWeightValue;
    } else {
      this.calArray.push(inputWeightValue);
    }
    
    let tempCal = 0;
    let tempWeight = 0;
    this.calArray.forEach((elem, index)=> {
      tempCal += (this.recipeIngredients[index].calAmount / 100) * elem;
      tempWeight += elem;
    })

    this.finalCal = tempCal;
    this.finalWeight = tempWeight;
  }

  onDeleteRecipeIngredient(id: number) {
    this.creatorService.deleteRecipeIngredient(id);

    //TODO: törlés után az összesített értékek nem változnak, resetelni kell
  }

  onSubmit() {
    const recipeName = this.recipeIngredientsForm.value.name;
    const pictureUrl = this.recipeIngredientsForm.value.pictureUrl;
    const ingredientsAmount = this.recipeIngredientsForm.value.ingredients;
    const ingredientsId = this.creatorService.getRecipeIngredients();
    const ingredients = [];

    ingredientsAmount.forEach((elem, index) => {
      const temp = {name: ingredientsId[index].name, picurl: ingredientsId[index].pictureUrl, amount: elem};
      ingredients.push(temp)
    });
    
    this.creatorService.addRecipe(recipeName, pictureUrl, this.finalCal, this.finalWeight, ingredients);

    //TODO: mentés után resetelni a formot és kitörölni a hozzáadott alapanyagokat
  }

  ngOnDestroy() {
    this.recipeIngredientsSub.unsubscribe();
  }

}
