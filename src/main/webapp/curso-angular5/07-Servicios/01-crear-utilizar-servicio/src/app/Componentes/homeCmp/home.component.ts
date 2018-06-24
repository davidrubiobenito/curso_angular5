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
  public titulo:String = 'Página Principal';
  
  constructor(private _ropaService: RopaService){   
  }

  ngOnInit(){
    console.log(this._ropaService.prueba('Camiseta Nike'));
  }

}
