import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

//  @Imput() is a decorator to receive information from a parent component
  @Input() hero: any = {};
  @Input() ind:number;
  
  constructor( private _router:Router) { }
  
  verHeroes(ind){
    // console.log(this.ind);
    this._router.navigate(["/hero", this.ind]);     
   }
  
  ngOnInit() {

  }

}
