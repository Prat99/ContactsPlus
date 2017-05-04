import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {Business} from '../business';
import {Category} from '../categories';

@Component({
  selector: 'app-addbusiness',
  templateUrl: './addbusiness.component.html',
  styleUrls: ['./addbusiness.component.css']
})
export class AddbusinessComponent implements OnInit {
  businesses:Business[];

  constructor(private fs:FirebaseService) { }

    addBusiness(event:Event,
    company:string,
    category:string,
    years_in_business:number,
    description:string,
    phone:number,
    email:string,
    street_address:string,
    city:string,
    state:string,
    zipcode:number
  )
      {
           //event.preventDefault();

           var created_business = {
                                    company: company,
                                    category: category,
                                    years_in_business:years_in_business,
                                    description:description,
                                    phone:phone,
                                    email:email,
                                    street_address: street_address,
                                    city: city,
                                    state: state,
                                    zipcode: zipcode};

            console.log(created_business);
            this.fs.setBusiness(created_business);
      }

  ngOnInit() {
  }

}
