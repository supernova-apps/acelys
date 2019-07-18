import { Component, OnInit } from '@angular/core';
import { ModalPage } from '../modal/modal.page';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-handle',
  templateUrl: './to-handle.page.html',
  styleUrls: ['./to-handle.page.scss'],
})
export class ToHandlePage implements OnInit {


  constructor(public modalController: ModalController, public popoverController: PopoverController, private router: Router) { }

  ngOnInit() {
  }

  async open_modal(ev: any) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'custom-popover'
    });
    return await modal.present();
    // const popover = await this.popoverController.create({
    //   component: PopoverPage,
    //   event: ev,
    //   translucent: true,
    //   cssClass: 'custom-popover'
    // });
    // return await popover.present();
  }

  show() {
    // this.router.navigate(['/incidentform']);
    this.router.navigateByUrl('/incidentform');
  }
}
