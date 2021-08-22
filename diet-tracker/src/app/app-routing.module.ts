import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path: "", redirectTo: "/ingredients", pathMatch: "full"},
  {path: "ingredients", component: IngredientsComponent},
  {path: "recipes", component: RecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
