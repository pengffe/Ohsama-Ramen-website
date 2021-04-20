import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sideDrawer = 'Close';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.sideDrawer === 'Close'){
      this.sideDrawer = 'Open';
    }else if (this.sideDrawer === 'Open'){
      this.sideDrawer = 'Close';
    }
  }
}


