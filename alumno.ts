export class Alumno{

    no_control:string;
    nombre:string;
    apellidos:string;
    promedio:number;
    genero:string;
    fecha_nac:string;
    activo:boolean;

    constructor(nc:string,n:string,ap:string,prom:number,gen:string,fn:string,act:boolean){
            this.no_control=nc;
            this.nombre=n;
            this.apellidos=ap;
            this.promedio=prom;
            this.genero=gen;
            this.fecha_nac=fn;
            this.activo=act;
    }

}