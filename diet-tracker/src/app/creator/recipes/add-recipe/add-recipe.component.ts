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
  incomingCalValue = 0;
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
    this.recipeIngredientsForm.get("ingredients").valueChanges.subscribe(val => {
      //console.log(val);
      this.incomingCalValue = +val;
    });
  }

  private initForm() {
    this.recipeIngredientsForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      pictureUrl: new FormControl(),
      ingredients: new FormArray([])
    });
  }

  inputChanged(event: any) {
    console.log(event.target.value);
    const inputId = +event.target.getAttribute('ng-reflect-name');
    const inputWeightValue = +event.target.value;
    //const ingredientCalValue = this.recipeIngredients[inputId].calAmount;
    //console.log("calAmount: ", this.recipeIngredients[inputId].calAmount);
    //const calculation = (ingredientCalValue / 100) * inputWeightValue;
    //this.finalCal = (ingredientCalValue / 100) * inputWeightValue;
    
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

  onSubmit() {
    console.log(this.recipeIngredientsForm)
  }

  ngOnDestroy() {
    this.recipeIngredientsSub.unsubscribe();
  }

}
