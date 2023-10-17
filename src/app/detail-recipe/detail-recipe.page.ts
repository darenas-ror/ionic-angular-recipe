import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Importar CRUD service
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.page.html',
  styleUrls: ['./detail-recipe.page.scss'],
})
export class DetailRecipePage implements OnInit {
  data:any;
  recipe:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private crud: CrudService
  ) {
    this.data = this.activatedRoute.snapshot.paramMap.get('id');
    this.getRecipe(this.data)
  }

  ngOnInit() {
  }

  async getRecipe(recipe_id: any){
    this.recipe = await this.crud.get(recipe_id)
    this.recipe = this.recipe[0]

  }
}
