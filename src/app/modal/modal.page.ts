import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {}

  edit() {
    this.modalCtrl.dismiss({
      dismissed: true
    });

    this.router.navigateByUrl("/advertisement");
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
