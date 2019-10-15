import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _heroService:HeroService,
               private _route:Router 
             ) { }

  ngOnInit() {
  }
 //method for search hero
  buscarHeroes( entrada:string ){
    // console.log(entrada);
    this._heroService.buscarHeroes(entrada);
    this._route.navigate(['/buscar', entrada]);    
  }

  
}
