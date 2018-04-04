import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contacts.service';
import { Contacto } from '../../models/contacto.model';


@IonicPage()
@Component({
  selector: 'page-nuevo-contacto',
  templateUrl: 'nuevo-contacto.html'
})

export class NuevoContactoPage {

  constructor(publicnavCtrl: NavController, privatecontactService: ContactService) {

  }

  onAddContact(value: Contacto){
    this.contactService.addContact(value);
    this.navCtrl.pop();
  }
}
