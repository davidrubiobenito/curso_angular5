import { Component , Input} from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent
{
  public nombre_componente:String = 'Fruta';

  constructor(){
  }

  ngOnInit(){
    
  }

}
