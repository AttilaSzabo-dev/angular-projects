import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://images.themodernproper.com/billowy-turkey/production/posts/2020/Creamy-Tomato-Chicken-Skillet-11.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599768537&s=7f47312bc3ecd09e7a456c3c946e3872"),
    new Recipe("A Test Recipe", "This is simply a test", "https://images.themodernproper.com/billowy-turkey/production/posts/2020/Creamy-Tomato-Chicken-Skillet-11.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599768537&s=7f47312bc3ecd09e7a456c3c946e3872")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
