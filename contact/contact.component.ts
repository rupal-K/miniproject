import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:Contact[];
  searchedContacts: Contact[];
  contact:Contact;
  contact1:Contact;
  contact2:Contact;
  contact3:Contact;
  contact4:Contact;
  contact5:Contact;
  contact6:Contact;
  constructor() { 
    this.contact= new Contact();
    this.contacts=[];
    this.contact1 = new Contact();
        this.contact2= new Contact();
        this.contact3 = new Contact();
        this.contact4 = new Contact();
        this.contact5 = new Contact();
        this.contact1.Firstname ="Eric";
        this.contact1.Lastname="Elliot";
        this.contact1.Contactnumber = "222-555-6575";
        this.contact2.Firstname = "Steve-"
        this.contact2.Lastname="jobs"; 
        this.contact2.Contactnumber= "220-657-6754";
        this.contact3.Firstname = "Fred"
        this.contact3.Lastname="Allen"; 
        this.contact3.Contactnumber="210-657-9886";
        this.contact4.Firstname = "Steve-";
        this.contact4.Lastname="Wozniak";
        this.contact4.Contactnumber= "343-675-8786";
        this.contact5.Firstname = "Bill";
        this.contact5.Firstname ="Gates";
        this.contact5.Contactnumber="234-567-9789";

        this.contacts.push(this.contact1);
        this.contacts.push(this.contact2);
        this.contacts.push(this.contact3);
        this.contacts.push(this.contact4);
        this.contacts.push(this.contact5);
  }

  ngOnInit(): void {
  }
  showdetails(){
    this.addcontact(this.contact);
   // this.getNominees();
}

  addcontact(m:Contact)
  {
      this.contacts.push(m);
      this.contact=new Contact();
  }
  updateContact(cont: Contact, updatedContact: Contact): void {
    this.contacts.forEach( (contact, index) => {
        if (contact === cont)
            this.contacts[index] = updatedContact;
    });
}
deleteContact(cont: Contact): void {
    this.contacts.forEach( (contact, index) => {
        if (contact === cont)
            this.contacts.splice(index, 1);
    });
}  
delete(contact) {
  this.contacts.splice(this.contacts.indexOf(contact), 1);
}

 /* getNominees():Nominee[]{
   return this.nominees;
  }*/
}

