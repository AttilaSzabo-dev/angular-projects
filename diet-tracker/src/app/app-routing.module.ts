import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IngredientsComponent } from './ingredients/ingredients.component';
import { AddNewComponent } from './ingredients/add-new/add-new.component';
import { EditComponent } from './ingredients/edit/edit.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path: "", redirectTo: "/ingredients", pathMatch: "full"},
  {path: "ingredients", component: IngredientsComponent, children: [
    {path: "", component: AddNewComponent},
    {path: ":id/edit", component: EditComponent}
  ] },
  {path: "recipes", component: RecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
