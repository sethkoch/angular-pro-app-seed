import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//third party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from './shared/shared.module'

export const ROUTES: Routes = [
  {
      path: 'auth',
      children: [
          { path: '', pathMatch: 'full', redirectTo: 'login'},
          { path: 'login', loadChildren: './login/login.module#LoginModule' },
          { path: 'register', loadChildren: './register/register.module#RegisterModule' }
      ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyC6naaaWFQTOqlbd7V6gLSJWxebEaLEf4U",
    authDomain: "fitness-crap.firebaseapp.com",
    databaseURL: "https://fitness-crap.firebaseio.com",
    projectId: "fitness-crap",
    storageBucket: "fitness-crap.appspot.com",
    messagingSenderId: "300150240024"
  };

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()

    ]
})
export class AuthModule {}