import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private fireStore: Firestore) {

  }

  getRecipes(): Observable<Recipe[]> {
    const recipesCollection = collection(this.fireStore, 'recipes');
    return collectionData(recipesCollection) as Observable<Recipe[]>;
  }

  async addRecipe(recipeData: Recipe) {
    try {
      // Lekérjük a 'recipes' kollekció referenciáját
      const recipesCollectionRef = collection(this.fireStore, 'recipes');

      // Hozzáadunk egy új dokumentumot a kollekcióhoz az addDoc() függvénnyel
      // Az addDoc() automatikusan generál egy egyedi ID-t
      const docRef = await addDoc(recipesCollectionRef, recipeData);

      console.log("Recept sikeresen hozzáadva, ID: ", docRef.id);
      // Itt kezelheted a sikeres hozzáadást
    } catch (error) {
      console.error("Hiba történt a recept hozzáadása közben: ", error);
      // Itt kezelheted a hibát
    }
  }

}
