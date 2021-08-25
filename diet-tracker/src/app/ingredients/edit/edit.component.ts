import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { IngredientService } from '../ingredients.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  id: number;
  ingredientForm: FormGroup;

  constructor(public ingredientService: IngredientService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.initForm();
      }
    );
  }

  private initForm() {
    const ingredient = this.ingredientService.getIngredient(this.id);
    this.ingredientForm = new FormGroup({
      name: new FormControl(ingredient.name, Validators.required),
      calAmount: new FormControl(ingredient.calAmount, Validators.required),
      pictureUrl: new FormControl(ingredient.pictureUrl)
    });
  }

  onSubmit() {
    this.ingredientService.updateIngredient(this.id, this.ingredientForm.value);
    this.router.navigate([""], {relativeTo: this.route});
  }

  onDelete() {
    this.ingredientService.deleteIngredient(this.id);
    this.router.navigate([""], {relativeTo: this.route});
  }
}
