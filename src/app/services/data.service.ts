import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestone: Firestore) { }

  getRecipes(){
    const recipesRef = collection(this.firestone, 'recipes');
    return collectionData(recipesRef);
  }
}
