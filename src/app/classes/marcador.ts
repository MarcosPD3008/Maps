export class Marcador {
    public lat: number;
    public lng: number;
    public Titulo = 'Sin titulo';
    public Descripcion = 'Sin descripcion';

    constructor(lat: number, lng: number, Titulo?: string, Descripcion?: string){
        this.lat = lat;
        this.lng = lng;
        if(Titulo) {
            this.Titulo = Titulo;
        }
        if(Descripcion){
            this.Descripcion = Descripcion;
        }
    }
}

