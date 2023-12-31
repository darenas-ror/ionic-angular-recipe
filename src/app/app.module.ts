import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

// Firebase
import { provideFirebaseApp, getApp, initializeApp  } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

//npm install @ionic/storage-angular
import { IonicStorageModule } from '@ionic/storage-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule, FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
