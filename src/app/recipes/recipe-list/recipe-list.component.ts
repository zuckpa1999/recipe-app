import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'Test Test',
      'https://i.guim.co.uk/img/media/01511e6530940bcda09b8cb9acdb4fcc315efd8a/0_1980_2832_1697/master/2832.jpg?width=620&quality=85&auto=format&fit=max&s=d68cb88dffb6d944388e8044225e531d'
    ),
    new Recipe(
      'A test Recipe',
      'Test Test',
      'https://i.guim.co.uk/img/media/01511e6530940bcda09b8cb9acdb4fcc315efd8a/0_1980_2832_1697/master/2832.jpg?width=620&quality=85&auto=format&fit=max&s=d68cb88dffb6d944388e8044225e531d'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
