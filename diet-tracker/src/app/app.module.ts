import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatorComponent } from './creator/creator.component';
import { RecipesComponent } from './creator/recipes/recipes.component';
import { AddIngredientComponent } from './creator/ingredients/add-ingredient/add-ingredient.component';
import { IngredientListComponent } from './creator/ingredients/ingredient-list/ingredient-list.component';
import { EditIngredientComponent } from './creator/ingredients/edit-ingredient/edit-ingredient.component';
import { IngredientComponent } from './creator/ingredients/ingredient-list/ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatorComponent,
    RecipesComponent,
    AddIngredientComponent,
    IngredientListComponent,
    EditIngredientComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
