import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from './ingredient/ingredient.model';
import { CreatorService } from '../../creator.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  private ingredientsSub: Subscription;

  constructor(public creatorService: CreatorService) {}

  /* ngOnInit() {
    this.ingredients = this.creatorService.getIngredients();
    this.ingredientsSub = this.creatorService.getIngredientUpdateListener() 
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  } */

  ngOnInit() {
    this.creatorService.getIngredients();
    this.ingredientsSub = this.creatorService.getIngredientUpdateListener() 
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy() {
    this.ingredientsSub.unsubscribe();
  }
}
