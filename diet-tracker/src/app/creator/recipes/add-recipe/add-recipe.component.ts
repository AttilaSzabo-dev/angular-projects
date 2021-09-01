import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CreatorService } from '../../creator.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(private creatorService: CreatorService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl(),
      pictureUrl: new FormControl()
    });
  }

  onSubmit() {

  }

}
