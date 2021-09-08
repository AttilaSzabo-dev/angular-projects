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

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {
    this.initForm();
    this.recipeIngredients = this.creatorService.getRecipeIngredients();
    this.recipeIngredientsSub = this.creatorService.getRecipeIngredientUpdateListener() 
      .subscribe((ingredients: Ingredient[]) => {
        this.recipeIngredients = ingredients;
        const control = new FormControl(null, Validators.required);
        console.log(ingredients);
        (<FormArray>this.recipeIngredientsForm.get("ingredients")).push(control);
      });
  }

  private initForm() {
    this.recipeIngredientsForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      pictureUrl: new FormControl(),
      ingredients: new FormArray([])
    });
  }

  /* onAddRecipe(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // reactive form ciklussal, hogy a szinkronban legyen a html résszel

    const name = form.value.name;
    const pictureUrl = form.value.pictureUrl;

    form.resetForm();
  } */

  onSubmit() {
    console.log(this.recipeIngredientsForm)
  }

  ngOnDestroy() {
    this.recipeIngredientsSub.unsubscribe();
  }

}
