import { MatListModule } from '@angular/material/list';
import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recipelist',
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule],
  templateUrl: './recipelist.component.html',
  styleUrl: './recipelist.component.scss'
})
export class RecipelistComponent {
  recipes: Recipe[] = [];
  unsubscribe: Subscription[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    const subscirption = this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
    this.unsubscribe.push(subscirption);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
