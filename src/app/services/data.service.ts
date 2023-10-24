import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: Firestore) { }

  getRecipes(){
    const itemCollection = collection(this.firestore, 'recipes');    
    return collectionData(itemCollection);
  }
}
