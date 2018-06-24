import { Component , Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent
{
  public titulo:String = 'Página de Contacto de la Web';
  public parametro : String;

  constructor(private _route: ActivatedRoute, private _router:Router ){
  }

  ngOnInit(){
    /*
    this._route.params.forEach(function(params: Params){
      this.parametro = params['page'];
      console.log(params);
    });
    */
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
      console.log(params);
  });
  }

}
