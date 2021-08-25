import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IngredientService } from '../ingredients.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent {
  //amountTypes = ["g", "ml"];

  constructor(public ingredientService: IngredientService) {}

  onAddIngredient(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const name = form.value.ingredientName;
    const calorie = form.value.calorieAmount;
    const pictureUrl = form.value.picture;

    this.ingredientService.addIngredient(name, calorie, pictureUrl);

    form.resetForm();
  }

  

}
