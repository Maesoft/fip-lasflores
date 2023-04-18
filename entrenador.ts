import { Futbolista } from "./futbolista";
import { IntegranteSeleccion } from "./integranteseleccion";

export class Entrenador extends IntegranteSeleccion{
    private cambiosDisponibles:number;
    private titulares: Futbolista[];
    private suplentes: Futbolista[];
    
    public constructor(nombre : string, apellido : string, nroPasaporte : string, fechaNacimiento : string, velocidad : number, cambiosDisponibles:number, titulares:Futbolista[], suplentes:Futbolista[]){
        super(nombre,apellido,nroPasaporte,fechaNacimiento,velocidad);
        this.cambiosDisponibles=cambiosDisponibles;
        this.titulares=titulares;
        this.suplentes=suplentes;
    }
    public hacerCambio(entra:number, sale:number){
        if (this.cambiosDisponibles>0){
        this.titulares.push(this.suplentes[entra]);
        this.titulares.splice(sale,1)
        this.suplentes.push(this.titulares[sale]);
        this.suplentes.splice(entra,1);
        this.cambiosDisponibles--;
        }else{
            console.log(`${this.apellido} no tiene mas cambios.`);
        }
    }
    public correr():void{
        this.velocidad=15;
    }
    public getTitulares():void{
        console.log("Titulares:");
        console.table(this.titulares)
    }
    public getSuplentes():void{
        console.log("Suplentes:");
        console.table(this.suplentes)
    }
}