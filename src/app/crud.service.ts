import { Injectable } from '@angular/core';

// Importar en el service as Storage de Angular
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) {
    this.ngOnInit();
  }

  // crear el storage
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  // Ingresar datos al storage con key
  async addWithKey(key: string, value: string){
    await this.storage.set(key, value);
  }

  // Ingresar datos al storage key autoincrementable
  async add(value: any){
    let id = await this.storage.length() + 1;
    await this.storage.set(id.toString(), value);
  }

  async get(key: string){
    return await this.storage.get(key);
  }

  async list(){
    let listado: string[] = []

    await this.storage.forEach((key, value, index) => { listado.push({id: index, ...key[0]}); })

    console.log("listado")
    console.log(listado)

    return listado;
  }

  delete(key: string){
    this.storage.remove(key);
  }
}
