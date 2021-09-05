import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CreatorService } from '../../creator.service';
import { Ingredient } from '../../ingredients/ingredient-list/ingredient/ingredient.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  recipeIngredients: Ingredient[] = [];
  private recipeIngredientsSub: Subscription;

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {
    this.recipeIngredients = this.creatorService.getRecipeIngredients();
    this.recipeIngredientsSub = this.creatorService.getRecipeIngredientUpdateListener() 
      .subscribe((ingredients: Ingredient[]) => {
        this.recipeIngredients = ingredients;
      });
  }

  onAddRecipe(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // reactive form ciklussal, hogy a szinkronban legyen a html résszel

    const name = form.value.name;
    const pictureUrl = form.value.pictureUrl;

    form.resetForm();
  }

  onSubmit() {

  }

  ngOnDestroy() {
    this.recipeIngredientsSub.unsubscribe();
  }

}
