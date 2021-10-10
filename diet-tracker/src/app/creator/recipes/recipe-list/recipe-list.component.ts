import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CreatorService } from '../../creator.service';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];
  private recipesSub: Subscription;

  constructor(public creatorService: CreatorService) {}

  /* ngOnInit() {
    this.recipes = this.creatorService.getRecipes();
    this.recipesSub = this.creatorService.getRecipesUpdateListener() 
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  } */

  ngOnInit() {
    this.creatorService.getRecipes();
    this.recipesSub = this.creatorService.getRecipesUpdateListener() 
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  ngOnDestroy() {
    this.recipesSub.unsubscribe();
  }

}
