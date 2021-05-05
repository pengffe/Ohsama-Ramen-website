import { Component, OnInit } from '@angular/core';
import {MenusService} from '../../menus.service';

@Component({
  selector: 'app-main-dishes',
  templateUrl: './main-dishes.component.html',
  styleUrls: ['./main-dishes.component.css']
})
export class MainDishesComponent implements OnInit {
  menus = [];

  constructor(private menuService: MenusService) { }

  ngOnInit(): void {
    this.menus = this.menuService.getMenuList();
  }

}
