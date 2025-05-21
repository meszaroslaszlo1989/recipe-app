import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { UserCredential } from 'firebase/auth';
import { AuthenticationService } from '../../../core/auth/services/authentication.service';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipeform',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
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
      description: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.recipeForm.valid) {
      try {
        const { title, description, } = this.recipeForm.value;
        const formRecipe: Recipe = {
          title, description, ingredients: ['hozávaló1', 'hozzávaló2']
        };
        await this.recipeService.addRecipe(formRecipe);
        this.router.navigate(['recipes']);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
