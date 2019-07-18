import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.page.html',
  styleUrls: ['./incident-form.page.scss'],
})
export class IncidentFormPage implements OnInit {

  constructor(private router: Router, private location: Location) { }

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
}
