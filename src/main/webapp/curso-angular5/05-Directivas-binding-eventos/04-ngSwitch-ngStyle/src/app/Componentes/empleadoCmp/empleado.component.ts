import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent
{
  public nombre_componente:String = 'Empleado';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajadorExterno: boolean;
  public color:String;

  constructor(){
    this.empleado = new Empleado('David Rubio', 40, 'Cocinero', false);
    this.trabajadores = [
      new Empleado('David Rubio', 40, 'Cocinero', true),
      new Empleado('Belén', 43, 'Programadora', true),
      new Empleado('Borja', 21, 'Cocinera', true),
      new Empleado('Paula', 22, 'Cajera', false),
    ];

    this.trabajadorExterno = true; 
    this.color = "blue";

  }

  ngOnInit(){
    console.log('Empleado', this.empleado);
    console.log('Empleado', this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajadorExterno = valor;
  }

}
