import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {StoryComponent} from './story/story.component';
import {MenuComponent} from './menu/menu.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full' },
  {path: 'main', component: MainComponent},
  {path: 'story', component: StoryComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
