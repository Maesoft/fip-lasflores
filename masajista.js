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
exports.Masajista = void 0;
var integranteseleccion_1 = require("./integranteseleccion");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, apellido, nroPasaporte, fechaNacimiento, velocidad) {
        return _super.call(this, nombre, apellido, nroPasaporte, fechaNacimiento, velocidad) || this;
    }
    Masajista.prototype.hacerMasajes = function (nroJugador) {
        console.log("".concat(this.nombre, " le realizo masajes al jugador ").concat(nroJugador, "."));
    };
    Masajista.prototype.correr = function () {
        this.velocidad = 15;
    };
    return Masajista;
}(integranteseleccion_1.IntegranteSeleccion));
exports.Masajista = Masajista;
