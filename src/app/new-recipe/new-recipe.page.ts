import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Importar CRUD service
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.page.html',
  styleUrls: ['./new-recipe.page.scss'],
})
export class NewRecipePage implements OnInit {
  ionicForm: FormGroup | any;
  isAlertOpen!: boolean;
  succesOpen!: boolean;
  public alertButtons = ['OK'];
  constructor(private crud: CrudService, public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      ingredients: [''],
      available: [false]
    });
  }

  async submitForm(){
    if (this.ionicForm.valid) {
      await this.crud.add([this.ionicForm.value])
      this.succesOpen = true;

      this.router.navigateByUrl('/');

      return false;
    } else {
      this.setOpen(true);
      return console.log('Please provide all the required values!');
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
