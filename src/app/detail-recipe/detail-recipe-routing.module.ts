import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRecipePage } from './detail-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRecipePageRoutingModule {}
