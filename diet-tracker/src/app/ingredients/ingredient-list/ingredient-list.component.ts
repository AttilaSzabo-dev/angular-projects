import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from './ingredient/ingredient.model';
import { IngredientService } from '../ingredients.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  private ingredientsSub: Subscription;

  constructor(public ingredientService: IngredientService) {}

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientsSub = this.ingredientService.getIngredientUpdateListener() 
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy() {
    this.ingredientsSub.unsubscribe();
  }
}
