import { Component, Input, OnInit } from '@angular/core';
import { DataService, Recipe } from '../services/data.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: string | undefined;
  recipe: any | undefined;

  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.dataService.getRecipeById(this.id).subscribe(res =>{
      this.recipe = res;
    })
  }

  async updateNote(){
    this.dataService.UpdateRecipe(this.recipe);
    const toast = await this.toastCtrl.create({
      message: "Receta actualizada",
      duration: 2000
    })

    toast.present();
  }
  
  async deleteNote(){
    this.dataService.DeleteRecipe(this.recipe);
    this.modalCtrl.dismiss();
  }
  
}
