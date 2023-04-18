"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var integranteseleccion_1 = require("./integranteseleccion");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, nroPasaporte, fechaNacimiento, velocidad, cambiosDisponibles, titulares, suplentes) {
        var _this = _super.call(this, nombre, apellido, nroPasaporte, fechaNacimiento, velocidad) || this;
        _this.cambiosDisponibles = cambiosDisponibles;
        _this.titulares = titulares;
        _this.suplentes = suplentes;
        return _this;
    }
    Entrenador.prototype.hacerCambio = function (entra, sale) {
        if (this.cambiosDisponibles > 0) {
            this.titulares.push(this.suplentes[entra]);
            this.titulares.splice(sale, 1);
            this.suplentes.push(this.titulares[sale]);
            this.suplentes.splice(entra, 1);
            this.cambiosDisponibles--;
        }
        else {
            console.log("".concat(this.apellido, " no tiene mas cambios."));
        }
    };
    Entrenador.prototype.correr = function () {
        this.velocidad = 15;
    };
    Entrenador.prototype.getTitulares = function () {
        console.log("Titulares:");
        console.table(this.titulares);
    };
    Entrenador.prototype.getSuplentes = function () {
        console.log("Suplentes:");
        console.table(this.suplentes);
    };
    return Entrenador;
}(integranteseleccion_1.IntegranteSeleccion));
exports.Entrenador = Entrenador;
