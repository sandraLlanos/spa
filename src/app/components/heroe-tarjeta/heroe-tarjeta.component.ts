import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

//  @Imput() is a decorator to receive information from a parent component
  @Input() hero: any = {};
  @Input() ind: number;

  @Output() heroeSeleccionado: EventEmitter<number> ;
  
  constructor( private _router:Router) {

    this.heroeSeleccionado = new EventEmitter();

   }
  
  verHeroes(){
    // console.log(this.ind); 
    // this.heroeSeleccionado.emit( this.ind );
    this._router.navigate(['/hero', this.ind]); 
   }
  
  ngOnInit() {

  }

}
