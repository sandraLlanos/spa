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

  constructor( private _activatedRoute:ActivatedRoute,
              private _heroService:HeroService
    ) {

   //method for get id by URL   
   this._activatedRoute.params.subscribe(params => {
    //  console.log(params['id'])
     this.hero = this._heroService.getHero(params['id']);     
    // console.log(this.hero);
    })

   }

  ngOnInit() {
  }

}
