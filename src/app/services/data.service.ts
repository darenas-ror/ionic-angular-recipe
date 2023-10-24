import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

export interface Recipe {
  id?: string;
  name: string;
  description?: string;
  ingredients?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: Firestore) { }

  getRecipes(): Observable<Recipe[]> {
    const itemCollection = collection(this.firestore, 'recipes');    
    return collectionData(itemCollection, { idField: 'id' }) as Observable<Recipe[]>;
  }

  getRecipeById(id: any): Observable<Recipe[]> {
    const itemCollection = doc(this.firestore, `recipes/${id}`);    
    return docData(itemCollection) as Observable<Recipe[]>;
  }

  AddRecipe(recipe: Recipe) {
    const itemCollection = collection(this.firestore, 'recipes');    
    return addDoc(itemCollection, recipe);
  }

  DeleteRecipe(recipe: Recipe) {
    const itemCollection = doc(this.firestore, `recipes/${recipe.id}`);
    return deleteDoc(itemCollection);
  }

  UpdateRecipe(recipe: Recipe) {
    const itemCollection = doc(this.firestore, `recipes/${recipe.id}`);
    return updateDoc(itemCollection, { title: recipe.name, description: recipe?.description, ingredients: recipe?.ingredients });
  }
}
