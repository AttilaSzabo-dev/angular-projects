import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CreatorService } from '../../creator.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent {
  //amountTypes = ["g", "ml"];

  constructor(public creatorService: CreatorService, private router: Router, private route: ActivatedRoute) {}

  onAddIngredient(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const name = form.value.name;
    const calAmount = form.value.calAmount;
    const pictureUrl = form.value.pictureUrl;

    this.creatorService.addIngredient(name, calAmount, pictureUrl);

    form.resetForm();
    this.router.navigate([""], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate([""], {relativeTo: this.route});
  }
}
