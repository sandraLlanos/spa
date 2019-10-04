import { Component, OnInit } from '@angular/core';
import { HeroService, Heroe } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor(private _serviceHero:HeroService) {
  }
  
  ngOnInit() {
    this.heroes=this._serviceHero.getHeroes();
    console.log(this.heroes);
  }

}
