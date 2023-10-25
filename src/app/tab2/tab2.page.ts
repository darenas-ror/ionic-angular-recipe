import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  recipes: any[] = [];

  constructor(
    private dataService: DataService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {
    this.dataService.getRecipes().subscribe(res => {
      this.recipes = res;
    })
  }

  async openRecipe(recipe: { id: any; name: any; description: any; }){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: recipe.id, name: recipe.name, description: recipe.description },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    })

    modal.present();
  }

  async addRecipes(){
    const alert = await this.alertCtrl.create({
      header: "Add recipe",
      inputs: [
        {
          name: "name",
          placeholder: "nombre de la receta",
          type: "text"
        },
        {
          name: "description",
          placeholder: "description de la receta",
          type: "textarea"
        },
        {
          name: "ingredients",
          placeholder: "ingredientes de la receta, seperados por ,",
          type: "text"
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel'
        },
        {
          text: 'Agregar',
          handler: (res) => {
            this.dataService.AddRecipe({ name: res.name, description: res.description, ingredients: res.ingredients });
          }
        }
      ]
    });

    await alert.present();
  }
}
