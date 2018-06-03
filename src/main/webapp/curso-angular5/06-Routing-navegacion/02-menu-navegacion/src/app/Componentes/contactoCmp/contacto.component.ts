import { Component , Input} from '@angular/core';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent
{
  public titulo:String = 'Página de Contacto de la Web';

  constructor(){
  }

  ngOnInit(){
    
  }

}
