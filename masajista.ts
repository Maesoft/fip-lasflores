import { Futbolista } from "./futbolista";
import { IntegranteSeleccion } from "./integranteseleccion";

export class Masajista extends IntegranteSeleccion{
    public constructor(nombre : string, apellido : string, nroPasaporte : string, fechaNacimiento : string, velocidad : number){
        super(nombre,apellido,nroPasaporte,fechaNacimiento,velocidad);
    }
public hacerMasajes(nroJugador){
    console.log(`${this.nombre} le realizo masajes al jugador ${nroJugador}.` );
}
public correr(): void {
    this.velocidad=15;
}
}