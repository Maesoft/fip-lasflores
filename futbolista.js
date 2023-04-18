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
exports.Futbolista = void 0;
var integranteseleccion_1 = require("./integranteseleccion");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, apellido, nroPasaporte, fechaNacimiento, velocidad, botin, nroCamiseta, lesionado) {
        var _this = _super.call(this, nombre, apellido, nroPasaporte, fechaNacimiento, velocidad) || this;
        _this.botin = botin;
        _this.nroCamiseta = nroCamiseta;
        _this.lesionado = lesionado;
        return _this;
    }
    Futbolista.prototype.patearAlArco = function () {
        var dado = Math.round(Math.random());
        dado == 0 ? console.log("".concat(this.apellido, " se acerca al arco.. se perfila.. pateeeaa... yyyy.. la pelota cae en manos del arquero!")) : console.log("".concat(this.apellido, " arranca por derecha.. se acerca al arco.. pateeeaa... yyyy.. \u00A1Goool! \u00A1Goooooool! no se puede creer, que golazo!"));
    };
    Futbolista.prototype.hacerPase = function () {
        console.log("".concat(this.apellido, " realiza un pase.."));
    };
    Futbolista.prototype.setLesionado = function (lesion) {
        this.lesionado = lesion;
    };
    Futbolista.prototype.getLesionado = function () {
        return this.lesionado;
    };
    return Futbolista;
}(integranteseleccion_1.IntegranteSeleccion));
exports.Futbolista = Futbolista;
