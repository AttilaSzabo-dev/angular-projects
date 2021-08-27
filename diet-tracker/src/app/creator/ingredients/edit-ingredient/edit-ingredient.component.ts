import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CreatorService } from '../../creator.service';

@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.scss']
})

export class EditIngredientComponent implements OnInit {
  id: number;
  ingredientForm: FormGroup;

  constructor(public creatorService: CreatorService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.initForm();
      }
    );
  }

  private initForm() {
    const ingredient = this.creatorService.getIngredient(this.id);
    this.ingredientForm = new FormGroup({
      name: new FormControl(ingredient.name, Validators.required),
      calAmount: new FormControl(ingredient.calAmount, Validators.required),
      pictureUrl: new FormControl(ingredient.pictureUrl)
    });
  }

  onSubmit() {
    this.creatorService.updateIngredient(this.id, this.ingredientForm.value);
    this.router.navigate([""], {relativeTo: this.route});
  }

  onDelete() {
    this.creatorService.deleteIngredient(this.id);
    this.router.navigate([""], {relativeTo: this.route});
  }
}
