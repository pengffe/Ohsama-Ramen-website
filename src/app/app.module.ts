import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { StoryComponent } from './story/story.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationItemsComponent } from './header/navigation-items/navigation-items.component';
import { LogoComponent } from './logo/logo.component';
import {FormsModule} from '@angular/forms';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MainDishesComponent } from './menu/main-dishes/main-dishes.component';
import { SideDishesComponent } from './menu/side-dishes/side-dishes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    StoryComponent,
    MenuComponent,
    ContactComponent,
    NavigationItemsComponent,
    LogoComponent,
    GoogleMapComponent,
    MainDishesComponent,
    SideDishesComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        GoogleMapsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
