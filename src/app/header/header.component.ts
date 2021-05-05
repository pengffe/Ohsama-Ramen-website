import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sideDrawer = 'Close';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.sideDrawer === 'Close'){
      this.sideDrawer = 'Open';
    }else if (this.sideDrawer === 'Open'){
      this.sideDrawer = 'Close';
    }
  }

  onClickLogo(): void {
    this.router.navigate(['./main']);
  }
}


