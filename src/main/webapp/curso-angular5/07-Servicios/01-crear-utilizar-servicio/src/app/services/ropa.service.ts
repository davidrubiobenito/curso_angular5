import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{

    public nombrePrenda:String = 'Pantalones vaqueros';

    prueba(nombrePrenda){
        return nombrePrenda ;
    }

}