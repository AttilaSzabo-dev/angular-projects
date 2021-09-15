import { Component, Input, OnInit } from '@angular/core';

import { CreatorService } from 'src/app/creator/creator.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {
  }

  onEditRecipe() {

  }

  onDeleteRecipe() {
    
  }

}
