import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatorComponent } from './creator/creator.component';
import { AddRecipeComponent } from './creator/recipes/add-recipe/add-recipe.component';
import { RecipeListComponent } from './creator/recipes/recipe-list/recipe-list.component';
import { AddIngredientComponent } from './creator/ingredients/add-ingredient/add-ingredient.component';
import { IngredientListComponent } from './creator/ingredients/ingredient-list/ingredient-list.component';
import { EditIngredientComponent } from './creator/ingredients/edit-ingredient/edit-ingredient.component';
import { IngredientComponent } from './creator/ingredients/ingredient-list/ingredient/ingredient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatorComponent,
    AddRecipeComponent,
    AddIngredientComponent,
    IngredientListComponent,
    EditIngredientComponent,
    IngredientComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
