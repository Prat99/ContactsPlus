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
        activeCompany?: string;
        activeDescription?:string;
        activeCategory:string;
        activeYears_in_business?:number;
        activeStreet_address?:string;
        activeCity:string;
        activeState?:string;
        activeZipcode?:string;
        activePhone?:string;
        activeEmail?:string;

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
     }  // filterCategory ends here

     editState(state, business)
     {
        this.appState = state
        this.activeCompany = business.company
        this.activeCategory = business.category
        this.activeYears_in_business = business.years_in_business
        this.activeDescription = business.description
        this.activePhone = business.phone
        this.activeEmail = business.email
        this.activeStreet_address =  business.street_address
        this.activeCity = business.city
        this.activeState = business.state
        this.activeZipcode =  business.zipcode
        this.activeKey = business.$key

        console.log(this.appState);
    }

    updateBusiness( 
    )
    {
        var upd_business = {
                              company: this.activeCompany,
                              category: this.activeCategory,
                              years_in_business:this.activeYears_in_business,
                              description:this.activeDescription,
                              phone:this.activePhone,
                              email:this.activeEmail,
                              street_address: this.activeStreet_address,
                              city: this.activeCity,
                              state: this.activeState,
                              zipcode:this.activeZipcode
                            };

      this.fs.upBusiness(this.activeKey, upd_business);
      this.changeState('default', this.activeKey);
    }
    
       deleteBusiness(key)
       {
         this.fs.delBusiness(key);
       }

}
