import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Business} from '../business';
import {Category} from '../categories';

@Injectable()
export class FirebaseService {

      items: FirebaseListObservable<any[]>;
      business: FirebaseListObservable<Business[]>;
      categories: FirebaseListObservable<Category[]>;

      constructor(private af: AngularFire) {
    }
        getFilterBusiness(category)
        {
           return this.business =   this.af.database.list('/business',  {
                                    query: {
                                      orderByChild: 'category',
                                      equalTo: category
                                    }}) as FirebaseListObservable<Business[]>;      
}
        getBusiness()
        {
           return this.business =   this.af.database.list('/business') as FirebaseListObservable<Business[]>;      
        }

        getCategories()
        {
           return this.categories = this.af.database.list('/categories') as FirebaseListObservable<Category[]>;
        }
         
        getIndex()
        {
           return this.items = this.af.database.list('');
        }

        setBusiness(created_business)
        {
           return this.business.push(created_business);
        }

        upBusiness(key ,created_business)
        {
           return this.business.update(key, created_business);
        }
}
