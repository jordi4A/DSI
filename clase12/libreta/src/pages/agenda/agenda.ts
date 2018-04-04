import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../../pages/nuevo-contacto/nuevo-contacto';
import { ContactService } from '../../services/contacts.services';
import { Contact } from '../../models/contact.model';

@IonicPage()

@Component({
  selector: 'page-libreta',
  templateUrl: 'libreta.html'
})

export class AgendaPage {
  contacts: Contact[] = [];

  constructor(publicnavCtrl: NavController, publicnavParams: NavParams,
    privateContactService: ContactService) {

  }

  ionViewWillEnter() {
    this.contacts = this.ContactService.getContacts();
  }
  onLoadNewPage() {
    this.navCtrl.push(NuevoContactoPage);
  }
  onItemTapped($event, contact) {

  }
}
