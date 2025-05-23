import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-recipeform',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './recipeform.component.html',
  styleUrl: './recipeform.component.scss'
})
export class RecipeformComponent {
  recipeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.recipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ])
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(this.formBuilder.control('', Validators.required));
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  async onSubmit() {
    if (this.recipeForm.valid) {
      try {
        const { title, description,ingredients } = this.recipeForm.value;
        const formRecipe: Recipe = {
          title, description, ingredients
        };
        console.log(formRecipe);
        //await this.recipeService.addRecipe(formRecipe);
        this.router.navigate(['recipes']);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
