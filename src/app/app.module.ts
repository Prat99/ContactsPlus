import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { AddbusinessComponent } from './addbusiness/addbusiness.component';
import { IndexComponent } from './index.component';



export const firebaseConfig = {
    apiKey: "AIzaSyA7g_2oW2Vuzx3JJ9biNmCnWTFrvfRzT0E",
    authDomain: "businesscontacts-db323.firebaseapp.com",
    databaseURL: "https://businesscontacts-db323.firebaseio.com",
    projectId: "businesscontacts-db323",
    storageBucket: "businesscontacts-db323.appspot.com",
    messagingSenderId: "236102139232"
};

@NgModule({
  declarations: [
    AppComponent,
    AddbusinessComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
    ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
