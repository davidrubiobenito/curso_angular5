import { Component , Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Coche } from './coche';

import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [ PeticionesService ]
})

export class CochesComponent{
  public titulo:String = 'Página de Coches de la Web';
  public coche: Coche;
  public coches: Array<Coche>;

  public articulos;

  constructor(private _route: ActivatedRoute, private _router:Router , private _peticionesService: PeticionesService ){

    this.coche = new Coche("","","");
    this.coches = [
      new Coche("Seat Panda","120","Blanco"),
      new Coche("Renaul Clio","110","Azul")
    ]
  }

  ngOnInit(){
    this._peticionesService.getArticulos().subscribe(
      result =>{
          this.articulos = result;
          if(!this.articulos){
            console.log("Error en el servidor");
          }

      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage)
      }
    )
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("","","");
  }

}
