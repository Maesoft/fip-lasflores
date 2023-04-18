import { Botin } from "./botin";
import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolista";
import { Masajista } from "./masajista";

const botin1= new Botin("Nike", "Negro", 42)
const botin2= new Botin("Adidas", "Dorados", 41)
const botin3= new Botin("Penalty", "Verde", 40)
const botin4= new Botin("Nike", "Rosa", 40)
const botin5= new Botin("Adidas", "Blanco", 44)
const botin6= new Botin("Penalty", "Negro", 43)

const futbolista1 = new Futbolista("Martin","Zapatta","SDE546123","12/11/90",0,botin5,1,false);
const futbolista2 = new Futbolista("Jose","Martinez","HEX599789","22/08/94",0,botin3,2,false);
const futbolista3 = new Futbolista("Raul","Gonzales","RCT811285","11/06/97",0,botin1,3,false);
const futbolista4 = new Futbolista("Leonel","Ramirez","GHE648218","12/07/95",0,botin3,4,false);
const futbolista5 = new Futbolista("Lautaro","Diaz","GDG489521","22/04/02",0,botin2,6,false);
const futbolista6 = new Futbolista("Dario","Sanchez","UER120489","10/03/00",0,botin4,5,false);
const futbolista7 = new Futbolista("Ramon","Perez","ETS354895","31/05/99",0,botin3,7,false);
const futbolista8 = new Futbolista("Victor","Garcia","DFG654862","23/09/95",0,botin3,8,false);
const futbolista9 = new Futbolista("Samuel","Lopez","IUP567245","22/02/94",0,botin1,30,false);
const futbolista10 = new Futbolista("Esteban","Quito","FGH818175","27/01/97",0,botin6,21,false);
const futbolista11 = new Futbolista("Marcelo","Fredes","MBN456789","29/07/95",0,botin4,31,false);
const futbolista12 = new Futbolista("Gabriel","Onzari","KJH753159","11/04/98",0,botin2,9,false);
const futbolista13 = new Futbolista("Eliseo","Rodriguez","YTR741852","16/02/99",0,botin3,12,false);
const futbolista14 = new Futbolista("Diego","Gochi","UJM965785","14/09/95",0,botin3,10,false);
const futbolista15 = new Futbolista("Joaquin","Crego","EWQ456921","19/11/96",0,botin5,41,false);
const futbolista16 = new Futbolista("Leandro","Justo","UHG451575","22/12/93",0,botin3,18,false);

const arrTitulaer:Futbolista[] = [futbolista1,futbolista2, futbolista3,futbolista4, futbolista5,futbolista6, futbolista7, futbolista8, futbolista9, futbolista10, futbolista11];
const arrSuplentes:Futbolista[] = [futbolista12,futbolista13, futbolista14,futbolista15, futbolista16];

const entrenador1 = new Entrenador("Carlos", "Bianchi", "GWQ746985","28/05/1963",0,5, arrTitulaer,arrSuplentes);

const masajista1 = new Masajista("Manuel", "Garcia","TWE574321", "15/04/91",0);

console.log("Los jugadores de este partido son:");

entrenador1.getSuplentes();
entrenador1.getTitulares();

console.log("Arranca el primer tiempo");

futbolista1.hacerPase();
futbolista2.hacerPase();
futbolista10.patearAlArco();

console.log("Arranca el segundo tiempo");

futbolista4.hacerPase();
futbolista6.hacerPase();
futbolista11.patearAlArco();

entrenador1.hacerCambio(4,2);
entrenador1.hacerCambio(3,8);
console.log("Asi queda el equipo despues de los cambios");

entrenador1.getSuplentes();
entrenador1.getTitulares();
