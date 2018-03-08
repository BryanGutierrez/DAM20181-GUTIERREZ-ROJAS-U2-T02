"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var arr = Array();
var al1 = new alumno_1.Alumno("14400945", "Bryan", "Gutiérrez", 100, "M", "14/09", true);
var al2 = new alumno_1.Alumno("14400946", "Juan", "López", 99, "M", "14/08", true);
var al3 = new alumno_1.Alumno("14400947", "Jorge", "Casas", 70, "M", "14/07", false);
var al4 = new alumno_1.Alumno("14400948", "María", "Rojas", 60, "F", "14/06", true);
arr = [al1, al2, al3, al4];
function agregar(alu) {
    console.log("######             AGREGAR             ####");
    arr.push(alu);
    imprimir();
}
function imprimir() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].no_control === "") { }
        else {
            console.log(arr[i].no_control + " - " + arr[i].nombre + " - " + arr[i].apellidos + " -" + arr[i].promedio + " - " + arr[i].genero + " - " + arr[i].fecha_nac + " - " + arr[i].activo);
        }
    }
    console.log("\n");
}
function borrar(num) {
    console.log("####               BORRAR              ###");
    var a = new alumno_1.Alumno("", "", "", 0, "", "", false);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].no_control === num) {
            arr[i] = a;
        }
    }
    imprimir();
}
function modificar(all) {
    console.log("####               MODIFICAR              ###");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].no_control === all.no_control) {
            arr[i] = all;
        }
    }
    imprimir();
}
var alumn = new alumno_1.Alumno("14401000", "Sergio", "Rojas", 100, "M", "24/09", true);
imprimir();
agregar(alumn);
borrar("14400945");
var alumn = new alumno_1.Alumno("14401000", "Santiago", "Díaz", 100, "M", "24/09", false);
modificar(alumn);
