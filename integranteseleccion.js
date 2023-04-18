"use strict";
exports.__esModule = true;
exports.IntegranteSeleccion = void 0;
var IntegranteSeleccion = /** @class */ (function () {
    function IntegranteSeleccion(nombre, apellido, nroPasaporte, fechaNacimiento, velocidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nroPasaporte = nroPasaporte;
        this.fechaNacimiento = fechaNacimiento;
        this.velocidad = velocidad;
    }
    IntegranteSeleccion.prototype.correr = function () {
        this.velocidad = 28;
    };
    IntegranteSeleccion.prototype.caminar = function () {
        this.velocidad = 5;
    };
    return IntegranteSeleccion;
}());
exports.IntegranteSeleccion = IntegranteSeleccion;
