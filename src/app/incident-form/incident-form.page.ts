import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.page.html',
  styleUrls: ['./incident-form.page.scss'],
})
export class IncidentFormPage implements OnInit {

  constructor(public modalController: ModalController, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }
  data() {
    this.router.navigateByUrl('/incidents/tohandle');
  }

  add() {
    this.router.navigateByUrl('/advertisement');
  }

  async open_modal(ev: any) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'custom-popover'
    });
    return await modal.present();
  }
}
