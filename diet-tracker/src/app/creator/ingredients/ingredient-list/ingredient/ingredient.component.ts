import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ingredient } from './ingredient.model';
import { CreatorService } from 'src/app/creator/creator.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})

export class IngredientComponent {
  @Input() ingredient: Ingredient;
  @Input() index: number;

  constructor(private route: ActivatedRoute, private router: Router, private creatorService: CreatorService) {};

  onEditIngredient() {
    this.router.navigate([this.index, "edit"], {relativeTo: this.route});
  }

  onDeleteIngredient(id: string) {
    this.creatorService.deleteIngredient(id);
  }

  onAddIngredientToRecipe() {
    const ingredient = this.creatorService.getIngredient(this.index);
    this.creatorService.addRecipeIngredient(ingredient, this.index);
  }
}
