import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AddNewComponent } from './ingredients/add-new/add-new.component';
import { ShowAllComponent } from './ingredients/show-all/show-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientsComponent,
    RecipesComponent,
    AddNewComponent,
    ShowAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
