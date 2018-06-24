import { Component , Input} from '@angular/core';
import { RopaService } from '../../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ RopaService ]
})
export class HomeComponent
{
  public titulo:string = 'Página Principal';
  public listadoRopa: Array<string>;
  public prendaAguardar: string;
  
  constructor(private _ropaService: RopaService){   
  }

  ngOnInit(){
    this.listadoRopa = this._ropaService.getRopa();
    console.log(this.listadoRopa);
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prendaAguardar);
    this.prendaAguardar = "";
  }

  eliminarPrenda(index: number){
    this._ropaService.deleteRopa(index);
    
  }

}
