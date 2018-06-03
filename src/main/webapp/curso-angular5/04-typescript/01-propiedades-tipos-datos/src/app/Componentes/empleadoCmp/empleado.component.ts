import { Component } from '@angular/core';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent
{
  public nombre_componente = 'Empleado';

  public nombre:String = 'David';
  public edad:number = 40;
  public mayorDeEdad:boolean = true;
  public trabajos:Array<string>= ['Carpintero', 'Albañil', 'Fontanero'];
  public trabajos2:Array<any>= ['Carpintero', 50, 'Fontanero'];
  public comodin:any = 23;

  public perro:String;


  constructor(){
    console.log('trajajos', this.trabajos);
    console.log('trajajos', this.comodin);
    this.perro = 'Json';

  }

  ngOnInit(){
    this.holaMundo(this.perro);
    this.cambiarNombre();
    this.cambiarEdad(45);

    // Variables y alcance
    var uno:number = 8;
    var dos:number = 15;

    if(uno === 8)
    {
      let uno = 3;
      var dos = 88;

      console.log('DENTRO DEL IF ' + uno + " "+ dos);
    }
    console.log('DENTRO DEL IF ' + uno + " "+ dos);


  }

  holaMundo(nombre){
    alert('Hola mundo' + nombre);
  }

  cambiarNombre(){
    this.nombre = 'Belen';
    alert(this.nombre);
  }

  cambiarEdad(edad){
    this.edad = edad;
    alert(this.edad);
  }
}
