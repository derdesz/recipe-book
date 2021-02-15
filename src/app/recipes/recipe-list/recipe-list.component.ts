import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('Test recipe', 'this is simply a test', 'https://media4.s-nbcnews.com/j/newscms/2020_16/1558143/martha-recipes-today-main-200413_41de0fe80755b18142fdcfefdeca654a.today-inline-large2x.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
