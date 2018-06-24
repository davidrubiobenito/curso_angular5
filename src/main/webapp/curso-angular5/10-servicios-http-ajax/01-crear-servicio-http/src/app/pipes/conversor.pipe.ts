import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'conversor' })
export class ConversorPipe implements PipeTransform {
    transform(value: string, por: string){
        let valueOne : number = parseInt(value);
        let valueTwo : number = parseInt(por);

        let result : string = "La multiplicación: " + valueOne+ " x " + valueTwo +" = " + (valueOne * valueTwo);

        return result;
    }
}