import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CreatorService } from '../../creator.service';
import { Ingredient } from '../../ingredients/ingredient-list/ingredient/ingredient.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  recipeIngredients: Ingredient[] = [];
  private recipeIngredientsSub: Subscription;

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {
    this.initForm();
    this.recipeIngredients = this.creatorService.getRecipeIngredients();
    this.recipeIngredientsSub = this.creatorService.getRecipeIngredientUpdateListener() 
      .subscribe((ingredients: Ingredient[]) => {
        this.recipeIngredients = ingredients;
      });
  }

  private initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl(),
      pictureUrl: new FormControl()
    });
  }

  onSubmit() {

  }

  ngOnDestroy() {
    this.recipeIngredientsSub.unsubscribe();
  }

}
