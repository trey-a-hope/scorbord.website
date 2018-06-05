import { Component, OnInit } from '@angular/core';
import { User } from '../../models/miscellaneous/user';
import { AngularFirestore, QuerySnapshot } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  customers: Array<User> = new Array<User>();
  
  constructor(db: AngularFirestore) { 
    //Fetch Customers
    db.collection('Users').ref.get().then((userDocs)=>{
      userDocs.docs.forEach((userDoc) => {
        let customer: User = new User();
        customer.name = userDoc.get('firstName') + ' ' + userDoc.get('lastName');
        customer.email = userDoc.get('email');
        customer.fcmToken = userDoc.get('fcmToken');
        this.customers.push(customer);
      })
    })
  }

  ngOnInit() { }
}
