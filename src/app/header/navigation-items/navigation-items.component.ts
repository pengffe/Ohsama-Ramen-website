import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.css']
})
export class NavigationItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toContact(): void {
    this.router.navigate(['main'], { fragment: 'contact' });
  }

}
