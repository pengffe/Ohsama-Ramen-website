import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral;
  position: google.maps.LatLngLiteral;

  constructor() { }

  ngOnInit(): void {
    this.center = {
      lat: -35.32040580231962, lng: 149.13310119529464
    };
    this.position = {lat: -35.32040580231962, lng: 149.13310119529464};
  }

}
