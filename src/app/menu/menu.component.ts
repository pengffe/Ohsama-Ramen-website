import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenusService} from '../menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus = [];

  constructor(private menuService: MenusService) { }

  ngOnInit(): void {
    this.menus = this.menuService.getMenuList();
  }
}
