import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name?: string
};

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    console.log(" constructor ");

    const itemCollection = collection(this.firestore, 'recipes');
    this.item$ = collectionData(itemCollection);
  }
}
