import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})

export class IngredientComponent {
  @Input() ingredient: Ingredient;
  @Input() index: number;

  constructor(private route: ActivatedRoute, private router: Router) {};

  onEditIngredient() {
    this.router.navigate([this.index, "edit"], {relativeTo: this.route});
  }
}
