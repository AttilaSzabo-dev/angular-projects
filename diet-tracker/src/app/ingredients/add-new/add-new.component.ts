import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent {
  @ViewChild("f") signupForm: NgForm;

  amountTypes = ["Darab", "Súly(g)"];
  ingredient = {
    name: "",
    amountType: "",
    amount: "",
    calorieAmount: ""
  };

  onSubmit() {
    this.ingredient.name = this.signupForm.value.ingredientData.ingredientName;
    this.ingredient.amountType = this.signupForm.value.ingredientData.amountType;
    this.ingredient.amount = this.signupForm.value.ingredientData.ingredientAmount;
    this.ingredient.calorieAmount = this.signupForm.value.ingredientData.calorieAmount;

    console.log(this.ingredient);
    

    this.signupForm.reset();
  }

}
