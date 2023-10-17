import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importar CRUD service
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.page.html',
  styleUrls: ['./new-recipe.page.scss'],
})
export class NewRecipePage implements OnInit {
  ionicForm: FormGroup | any;

  constructor(private crud: CrudService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      available: [false]
    });
  }

  async submitForm(){
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);

      await this.crud.add([this.ionicForm.value])
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  }
}
