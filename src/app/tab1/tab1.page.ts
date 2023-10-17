import { Component } from '@angular/core';

// Importar CRUD service
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  recipes: any;
  constructor(private crud: CrudService) {
    console.log("contructor")
    this.getRecipes();
  }

  ngOnInit() {
    console.log("ngOnInit")
  }

  async getRecipes(){
    this.recipes = await this.crud.list();

    console.log(this.recipes)
  }
}
