"use strict";
exports.__esModule = true;
exports.Marcador = void 0;
var Marcador = /** @class */ (function () {
    function Marcador(lat, lng, Titulo, Descripcion) {
        this.Titulo = 'Sin titulo';
        this.Descripcion = 'Sin descripcion';
        this.lat = lat;
        this.lng = lng;
        if (Titulo) {
            this.Titulo = Titulo;
        }
        if (Descripcion) {
            this.Descripcion = Descripcion;
        }
    }
    return Marcador;
}());
exports.Marcador = Marcador;
