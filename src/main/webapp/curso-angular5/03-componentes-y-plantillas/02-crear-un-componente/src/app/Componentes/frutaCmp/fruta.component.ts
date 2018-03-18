import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent{
  public nombre_componente = 'Componente Fruta';
  public listado_componente = 'Naranja, Manzana, Pera, Sandia y Melón';
}
