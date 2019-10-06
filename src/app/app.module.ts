import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routs
import { APP_ROUTING } from './app.routes';

//Services
import { HeroService } from './services/hero.service'

//componets
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
        
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
