import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRecipePageRoutingModule } from './detail-recipe-routing.module';

import { DetailRecipePage } from './detail-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRecipePageRoutingModule
  ],
  declarations: [DetailRecipePage]
})
export class DetailRecipePageModule {}
