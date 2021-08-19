import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
@Injectable()
export default class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe 1 ',
      'Test Test',
      'https://i.guim.co.uk/img/media/01511e6530940bcda09b8cb9acdb4fcc315efd8a/0_1980_2832_1697/master/2832.jpg?width=620&quality=85&auto=format&fit=max&s=d68cb88dffb6d944388e8044225e531d',
      [new Ingredient('meat', 1), new Ingredient('potato', 3)]
    ),
    new Recipe(
      'A test Recipe 2',
      'Test Tesdasdsadt',
      'https://i.guim.co.uk/img/media/01511e6530940bcda09b8cb9acdb4fcc315efd8a/0_1980_2832_1697/master/2832.jpg?width=620&quality=85&auto=format&fit=max&s=d68cb88dffb6d944388e8044225e531d',
      [new Ingredient('chips', 11), new Ingredient('salad', 2)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    //return the new array / a copy
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    // whats deep copy
    // slice return a cope of an array
    return this.recipes.slice()[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
