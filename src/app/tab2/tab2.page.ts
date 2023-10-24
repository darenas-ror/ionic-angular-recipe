import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  recipes: any[] = [];

  constructor(private dataService: DataService, private alertCtrl: AlertController) {
    this.dataService.getRecipes().subscribe(res => {
      this.recipes = res;
    })
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
