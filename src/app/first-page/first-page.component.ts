import { Component, OnInit } from '@angular/core';
import { Point } from '../map/map.models';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  markers : Point[];
  constructor() { }

  ngOnInit() {
    this.markers=[
      {lat: 29.4241, lng: -98.4936}
    ]
  }

}
