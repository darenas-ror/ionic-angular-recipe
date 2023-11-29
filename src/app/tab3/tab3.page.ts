import { Component } from '@angular/core';
import { PostServiceService } from '../post-service.service'
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  arrayPosts:any;

  constructor(
    public postService:PostServiceService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {
    this.ionViewDidLoad();
  }

  async addPost(){
    const alert = await this.alertCtrl.create({
      header: "Add post",
      inputs: [
        {
          name: "title",
          placeholder: "titulo del post",
          type: "text"
        },
        {
          name: "body",
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
          handler: async (res) => {
            this.postService.addPost(res);

            const confirm = await this.alertCtrl.create({
              header: 'Post creado',
              message: 'El post a sido creado con exito.',
              buttons: ['Action'],
            });
        
            await confirm.present();
          }
        }
      ]
    });

    await alert.present();
  }

  ionViewDidLoad() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }

  async deletePost(id: any){
    this.postService.deletePosts(id)
    .then(async data => {

      const confirm = await this.alertCtrl.create({
        header: 'Post Eliminado',
        message: 'El post a sido eliminado con exito.',
        buttons: ['Action'],
      });
  
      await confirm.present();

      this.getPosts();
    });
  }
}
