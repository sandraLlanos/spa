import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: any = {};
  casa: string;
  casaHero: boolean;
  constructor( private _activatedRoute:ActivatedRoute,
              private _heroService:HeroService
    ) {

   this._activatedRoute.params.subscribe(params => {
     console.log(params['id'])
     this.hero = this._heroService.getHero(params['id']);
     console.log(this.hero);
    })
   }

   MostrarCasa(){
     this.casa = this.hero.casa;
      if (this.casa == "Marvel"){
        this.casaHero = true;
      }else{
        this.casaHero = false;
      }
   }

  ngOnInit() {
    this.MostrarCasa();
  }

}
