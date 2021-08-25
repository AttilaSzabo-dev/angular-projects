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

    const name = form.value.name;
    const calAmount = form.value.calAmount;
    const pictureUrl = form.value.pictureUrl;

    this.ingredientService.addIngredient(name, calAmount, pictureUrl);

    form.resetForm();
  }

  

}
