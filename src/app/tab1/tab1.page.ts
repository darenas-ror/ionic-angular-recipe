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
  filter_recipes: any;
  constructor(private crud: CrudService) {
    console.log("contructor")
    this.getRecipes();
  }

  ngOnInit() {
    console.log("ngOnInit")
  }

  async getRecipes(){
    this.recipes = await this.crud.list();
    this.filter_recipes = this.recipes
  }

  search(event: Event) {
    const search_value = (event.target as HTMLTextAreaElement).value
    if(search_value == ""){
      this.filter_recipes = this.recipes
    }else{
      this.filter_recipes = this.recipes.filter((recipe:any) => recipe.name.toLowerCase().search(search_value.toLowerCase()) >= 0 );
    }
  }

  clear(event: Event) {
    this.filter_recipes = this.recipes
  }
}
