import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.page.html',
  styleUrls: ['./incidents.page.scss']
})
export class IncidentsPage implements OnInit {
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {

  }

  back() {
    this.location.back();
  }
  tab1() {

    console.log('1');
  }

  tab2() {
    console.log('2');
  }

}
