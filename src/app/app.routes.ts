import { LayoutComponent } from './shared/layout/layout.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RecipelistComponent } from './feature/recipe/recipelist/recipelist.component';
import { RecipeformComponent } from './feature/recipe/recipeform/recipeform.component';
import { RecipedetailComponent } from './feature/recipe/recipedetail/recipedetail.component';
import { MyrecipelistComponent } from './feature/recipe/myrecipelist/myrecipelist.component';
import { AuthGard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGard],
    children: [
      { path: 'recipes', component: RecipelistComponent },
      { path: 'recipes/my', component: MyrecipelistComponent },
      { path: 'recipe/add', component: RecipeformComponent },
      { path: 'recipe/detial', component: RecipedetailComponent },
      { path: '', redirectTo: '/recipes', pathMatch: 'full'}
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];
