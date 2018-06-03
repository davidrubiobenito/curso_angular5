import { Component , Input} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
  public titulo:String = 'Página Principal';

  constructor(){
  }

  ngOnInit(){
    
  }

}
