import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import {Business} from './business';
import {Category} from './categories';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

        businesses: Business[];
        categories: Category[];
        activeKey: String;
        appState: String;
       constructor(private fs:FirebaseService)
       {

       } 
     ngOnInit()
     {
          this.fs.getBusiness().subscribe(business =>
            {
              this.businesses = business;
             // console.log(this.businesses);
            });

           this.fs.getCategories().subscribe(category =>
            {
              this.categories = category;
              // console.log(this.categories);
            });  
     }

     changeState(state, key)
     {
        console.log('state  '+state);
           if(key)
           {
             console.log('key of the contact  '+key);
             this.activeKey = key;
           }
           this.appState = state;
     }

       filterCategory(category){
          console.log('filtered category : '+category);
          this.fs.getFilterBusiness(category).subscribe(businesses => {
          this.businesses = businesses;
        });

     } 

}
