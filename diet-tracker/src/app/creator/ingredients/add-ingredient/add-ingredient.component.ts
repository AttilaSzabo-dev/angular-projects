import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CreatorService } from '../../creator.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent {
  //amountTypes = ["g", "ml"];

  constructor(public creatorService: CreatorService) {}

  onAddIngredient(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const name = form.value.name;
    const calAmount = form.value.calAmount;
    const pictureUrl = form.value.pictureUrl;

    this.creatorService.addIngredient(name, calAmount, pictureUrl);

    form.resetForm();
  }

  

}
