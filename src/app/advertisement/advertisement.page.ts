import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.page.html',
  styleUrls: ['./advertisement.page.scss'],
})
export class AdvertisementPage implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }
  back() {
    this.location.back();
  }
  save() {
    this.router.navigateByUrl('/incidents/tohandle');
  }
}
