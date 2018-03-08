"use strict";
exports.__esModule = true;
var Alumno = /** @class */ (function () {
    function Alumno(nc, n, ap, prom, gen, fn, act) {
        this.no_control = nc;
        this.nombre = n;
        this.apellidos = ap;
        this.promedio = prom;
        this.genero = gen;
        this.fecha_nac = fn;
        this.activo = act;
    }
    return Alumno;
}());
exports.Alumno = Alumno;
