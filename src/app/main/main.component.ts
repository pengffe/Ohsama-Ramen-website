import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  zoom = 12;
  center: google.maps.LatLngLiteral;
  position: {};

  menus = [
    {
      label: 'オロチョンラーメン',
      name: 'OROCHYON SPICY MISO RAMEN',
      ingredients: 'Pork and chicken based cloudy colour soup. Added with dried blessings of the mountains and sea, homemade Ramen miso.',
      topping: 'Spicy Orochyon paste/sweet soy porched egg/black fungus/Bok-choy/original tamari soy braised pork belly/ cabbage/ MENMA/ Naruto/ shallot/ roasted sesame',
      price: '24',
      imagePath: 'assets/section3_menu_miso-ramen.jpg'
    },
    {
      label: 'スパイシーサーモン丼',
      name: 'SPICY SALMON DON',
      ingredients: 'Original Spicy salmon sashimi on top of the sushi rice.',
      topping: 'spicy diced fresh salmon sashimi/ avocado/ cucumber/ basil/ pink ginger/ wasabi Lemon cut (please squeeze)/ shredded nori/sesame',
      price: '24',
      imagePath: 'assets/section3_menu_salmon-don.jpg'
    },
    {
      label: 'タスマニア丼/サーモンちらし',
      name: 'TASMANIA DON TRADITIONAL WAY',
      ingredients: 'Salmon sashimi on top of the sushi rice. Homemade sweet sashimi soy sauce.',
      topping: 'fresh salmon sashimi/pink ginger/wasabi/ shredded nori/sesame',
      price: '24',
      imagePath: 'assets/section3_menu_tasmania-don.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
