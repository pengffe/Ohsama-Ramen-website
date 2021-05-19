import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class MenusService {
  margin = '20px';
  menus = [
    {
      id: 1,
      label: '王二郎とんこつ',
      name: 'OH! JIRO TONKOTSU RAMEN',
      ingredients: 'Long hour (8-10h) cooked creamy emulsified delicious soup.',
      topping: 'original tamari soy braised pork belly/sweet soy porched egg/black fungus/Bok- choy savoy cabbage/MENMA/Naruto/shallot/roasted sesame/ black garlic oil.',
      price: '24',
      imagePath: 'assets/image/menu/web_menu1.png',
      direction: 'row',
      left: this.margin,
      right: ''
    },
    {
      id: 2,
      label: '淡麗鶏そば',
      name: 'OH! SAMA TORI CHICKEN RAMEN',
      ingredients: 'Slow simmered cooked clear Chicken broth. Added with dried blessings of the mountains and sea.',
      topping: 'original Citrus flavour of chicken breast /sweet soy porched egg/black fungus/Bok- choy cabbage/MENMA/Naruto/shallot/roasted sesame/ green shallot oil/fried onion',
      price: '24',
      imagePath: 'assets/image/menu/web_menu2.png',
      direction: 'row-reverse',
      left: '',
      right: this.margin
    },
    {
      id: 3,
      label: 'オロチョンラーメン',
      name: 'OROCHYON SPICY MISO RAMEN',
      ingredients: 'Pork and chicken based cloudy colour soup. Added with dried blessings of the mountains and sea, homemade Ramen miso.',
      topping: 'Spicy Orochyon paste/sweet soy porched egg/black fungus/Bok- choy/ original tamari soy braised pork belly/cabbage/MENMA/Naruto/shallot/roasted sesame/\n' +
        'garlic Chilli oil/fried onion',
      price: '24',
      imagePath: 'assets/image/menu/web_menu3.png',
      direction: 'row',
      left: this.margin,
      right: ''
    },
    {
      id: 4,
      label: '濃厚魚介豚骨つけ麺',
      name: 'TONKOTSU TSUKEMEN DIPPING STYLE RAMEN',
      ingredients: 'Serving soup and ramen separately. (worm soup and worm ramen)',
      noodle: 'braised pork belly/ sweet soy porched egg/black fungus/Bok- choy\n' +
        'cabbage/MENMA/Naruto/Leek',
      dipping: '/shallot/roasted sesame/ black garlic oil.',
      price: '24',
      imagePath: 'assets/image/menu/web_menu4.png',
      direction: 'row',
      left: '',
      right: this.margin
    },
    {
      id: 5,
      label: '北海道味噌ラーメン',
      name: 'HOKKAIDO MISO RAMEN',
      ingredients: 'Pork and chicken based cloudy colour soup. Added with dried blessings of the mountains and sea.',
      topping: 'sweet soy porched egg/black fungus/Bok- choy/ original tamari soy braised pork belly/cabbage/MEN-MA/Naruto/shallot/roasted sesame/\n' +
        'Sweet corn/fried onion, homemade Ramen miso.',
      price: '24',
      imagePath: 'assets/image/menu/web_menu5.png',
      direction: 'row',
      left: this.margin,
      right: ''
    },
    {
      id: 6,
      label: '混ぜそば',
      name: 'MAZE-SOBA',
      ingredients: 'Delicious pre-mixed saucy buckwheat noodle (SOBA)',
      topping: 'sweet soy pork mince/black fungus/Bok-Choi/Leek/Shallots/egg yolk/MENMA Tomato/snow pea sprouts/shredded nori',
      price: '24',
      imagePath: 'assets/image/menu/web_menu6.png',
      direction: 'row',
      left: '',
      right: this.margin
    },
    {
      id: 7,
      label: '坦々麺',
      name: 'TAN-TAN -MEN',
      ingredients: 'Spicy pork mince on the noodle.',
      topping: 'spicy pork mince/black fungus/Bok-Choi/Leek/Shallots/MENMA Garlic soy dressing/Sesame Mayo/snow pea sprouts/shredded nori/Chili oil/ Julienned fried egg.',
      price: '24',
      imagePath: 'assets/image/menu/web_menu7.png',
      direction: 'row',
      left: this.margin,
      right: ''
    },
    {
      id: 8,
      label: 'サラダそば',
      name: 'SALAD SOBA',
      ingredients: 'Variety toppings on fresh Garden salad style SOBA.',
      topping: 'Diced fresh sashimi salmon/Salad Leaves/avocado/cucumber/baby tomato Garlic soy dressing/Sesame Mayo/snow pea sprouts/shredded nori/Chili oil/fried onion.',
      price: '24',
      imagePath: 'assets/image/menu/web_menu8.png',
      direction: 'row',
      left: '',
      right: this.margin
    },
    {
      id: 9,
      label: 'スパイシーサーモン丼',
      name: 'SPICY SALMON DON',
      ingredients: 'Original Spicy salmon sashimi on top of the sushi rice.',
      topping: 'spicy diced fresh salmon sashimi/avocado/cucumber/basil/pink ginger/wasabi Lemon cut (please squeeze)/Shredded nori/sesame',
      price: '24',
      imagePath: 'assets/image/menu/web_menu9.png',
      direction: 'row',
      left: this.margin,
      right: ''
    },
    {
      id: 10,
      label: 'タスマニア丼/サーモンちらし',
      name: 'TASMANIA DON TRADITIONAL WAY',
      ingredients: 'salmon sashimi on top of the sushi rice. Homemade sweet sashimi soy sauce.',
      topping: 'fresh salmon sashimi/pink ginger/wasabi/Shredded nori/sesame',
      price: '24',
      imagePath: 'assets/image/menu/web_menu10.png',
      direction: 'row',
      left: '',
      right: this.margin
    },
    {
      id: 11,
      label: '築地直送うな丼',
      name: 'GRILLED EEL DON TOKYO STYLE',
      ingredients: 'grilled eel from Tokyo fish market on steamed rice or sushi rice for your choice.',
      topping: 'big serving of high-quality grilled eel/green seaweed salad/Unagi-Sauce',
      price: '24',
      imagePath: 'assets/image/menu/web_menu11.png',
      direction: 'row',
      left: this.margin,
      right: ''
    },
    {
      id: 12,
      label: 'ネギチャーシュー丼',
      name: 'NEGI-CHA-SHU-DON',
      ingredients: 'Panfryed braised pork belly, tossed with green shallots for flavour. Finish with homemade teriyaki sauce. Served on steamed rice.',
      topping: 'Garnish; Leek/Shallot/Red ginger/shredded nori/fried onion.',
      price: '24',
      imagePath: 'assets/image/menu/web_menu12.png',
      direction: 'row',
      left: '',
      right: this.margin
    },
  ];

  constructor() { }

  // tslint:disable-next-line:typedef
  getMenuList() {
    return this.menus;
  }
}
