import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatorComponent } from './creator/creator.component';
import { AddRecipeComponent } from './creator/recipes/add-recipe/add-recipe.component';
import { RecipeListComponent } from './creator/recipes/recipe-list/recipe-list.component';
import { RecipeComponent } from './creator/recipes/recipe-list/recipe/recipe.component';
import { AddIngredientComponent } from './creator/ingredients/add-ingredient/add-ingredient.component';
import { IngredientListComponent } from './creator/ingredients/ingredient-list/ingredient-list.component';
import { EditIngredientComponent } from './creator/ingredients/edit-ingredient/edit-ingredient.component';
import { IngredientComponent } from './creator/ingredients/ingredient-list/ingredient/ingredient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

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
    RecipeListComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
