import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {StoryComponent} from './story/story.component';
import {MenuComponent} from './menu/menu.component';
import {ContactComponent} from './contact/contact.component';
import {MainDishesComponent} from './menu/main-dishes/main-dishes.component';
import {SideDishesComponent} from './menu/side-dishes/side-dishes.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'story', component: StoryComponent},
  {path: 'menu', redirectTo: 'menu/main-dishes', pathMatch: 'full'},
  {
    path: 'menu', component: MenuComponent, children: [
      {path: 'main-dishes', component: MainDishesComponent},
      {path: 'side-dishes', component: SideDishesComponent}
    ]
  },
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
