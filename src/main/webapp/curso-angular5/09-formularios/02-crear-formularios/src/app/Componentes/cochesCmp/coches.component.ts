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

  constructor(private _route: ActivatedRoute, private _router:Router ){

    this.coche = new Coche("","","");
  }

  ngOnInit(){
   
  }

  onSubmit(){
    console.log(this.coche);
  }

}
