import { IntegranteSeleccion } from "./integranteseleccion";
import { Botin } from "./botin";
export class Futbolista extends IntegranteSeleccion{
    private botin:Botin;
    private nroCamiseta:number;
    private lesionado:boolean;
    public constructor(nombre : string, apellido : string, nroPasaporte : string, fechaNacimiento : string, velocidad : number, botin : Botin, nroCamiseta:number, lesionado : boolean){
        super(nombre,apellido,nroPasaporte,fechaNacimiento,velocidad);
        this.botin=botin;
        this.nroCamiseta=nroCamiseta;
        this.lesionado=lesionado;
    }
    public patearAlArco():void{
        const dado= Math.round(Math.random());
        dado==0 ? console.log(`${this.apellido} se acerca al arco.. se perfila.. pateeeaa... yyyy.. la pelota cae en manos del arquero!`) : console.log(`${this.apellido} arranca por derecha.. se acerca al arco.. pateeeaa... yyyy.. ¡Goool! ¡Goooooool! no se puede creer, que golazo!`);        
    }
    public hacerPase():void{
        console.log(`${this.apellido} realiza un pase..`);
    }
    public setLesionado(lesion:boolean){
        this.lesionado=lesion;
    }
    public getLesionado(){
        return this.lesionado;
    }
}
