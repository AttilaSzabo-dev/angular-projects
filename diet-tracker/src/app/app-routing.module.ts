import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatorComponent } from './creator/creator.component';
import { AddIngredientComponent } from './creator/ingredients/add-ingredient/add-ingredient.component';
import { EditIngredientComponent } from './creator/ingredients/edit-ingredient/edit-ingredient.component';

const routes: Routes = [
  {path: "", redirectTo: "/creator", pathMatch: "full"},
  {path: "creator", component: CreatorComponent, children: [
    {path: "", component: AddIngredientComponent},
    {path: ":id/edit", component: EditIngredientComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
