import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'new-recipe',
    loadChildren: () => import('./new-recipe/new-recipe.module').then( m => m.NewRecipePageModule)
  },
  {
    path: 'detail-recipe/:id',
    loadChildren: () => import('./detail-recipe/detail-recipe.module').then( m => m.DetailRecipePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
