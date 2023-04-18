export class IntegranteSeleccion{
     protected nombre : string;
     protected apellido : string;
     protected nroPasaporte : string;
     protected fechaNacimiento : string;
     protected velocidad : number;
     public constructor(nombre : string, apellido : string, nroPasaporte : string, fechaNacimiento : string, velocidad : number){
            this.nombre=nombre;
            this.apellido=apellido;
            this.nroPasaporte=nroPasaporte;
            this.fechaNacimiento=fechaNacimiento;
            this.velocidad=velocidad;
     }
     public correr():void{
        this.velocidad=28
     }
     public caminar():void{
        this.velocidad=5
     }
}