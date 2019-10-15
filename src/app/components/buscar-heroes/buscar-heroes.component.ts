import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styleUrls: ['./buscar-heroes.component.css']
})
export class BuscarHeroesComponent implements OnInit {
  heroes:any[] = [];
  termino:string;
  @Input() hero:any={};
  @Input() index:number;

  constructor( private _heroService:HeroService,
               private _activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {

    //use to get param by id
    this._activatedRoute.params.subscribe((params) => {
      this.termino = params[ 'termino' ];
      // console.log(params['termino']);
      this.heroes = this._heroService.buscarHeroes(params['termino']);
      // console.log(this.heroes);
      // console.log(this.heroes.length);
    })
  }

}
