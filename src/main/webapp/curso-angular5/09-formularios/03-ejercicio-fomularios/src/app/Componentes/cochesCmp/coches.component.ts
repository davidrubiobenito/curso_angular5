import { Component , Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})

export class CochesComponent{
  public titulo:String = 'Página de Coches de la Web';
  public coche: Coche;
  public coches: Array<Coche>;

  constructor(private _route: ActivatedRoute, private _router:Router ){

    this.coche = new Coche("","","");
    this.coches = [
      new Coche("Seat Panda","120","Blanco"),
      new Coche("Renaul Clio","110","Azul")
    ]
  }

  ngOnInit(){
   
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("","","");
  }

}
