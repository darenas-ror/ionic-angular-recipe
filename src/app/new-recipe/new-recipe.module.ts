import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRecipePageRoutingModule } from './new-recipe-routing.module';

import { NewRecipePage } from './new-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewRecipePageRoutingModule
  ],
  declarations: [NewRecipePage]
})
export class NewRecipePageModule {}
