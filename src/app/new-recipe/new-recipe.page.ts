import { Component, OnInit } from '@angular/core';

// Importar CRUD service
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.page.html',
  styleUrls: ['./new-recipe.page.scss'],
})
export class NewRecipePage implements OnInit {

  constructor(private crud: CrudService) { }

  ngOnInit() {
  }

  async CreateRecipe(txtName:HTMLInputElement, txtDescription:HTMLInputElement, txtEnable:HTMLInputElement){
    const data = [{
      "name": txtName.value,
      "description": txtDescription.value,
      "enable": txtEnable.value
    }]

    await this.crud.add(data);
  }
}
