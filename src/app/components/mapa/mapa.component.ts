import { Marcador } from './../../classes/marcador';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditarComponent } from './editar.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  lat = 51.678418;
  lng = 7.809007;
  Marcadores: Marcador[] = [];
  Form:FormGroup = new FormGroup({
    lat: new FormControl(0, [Validators.required, Validators.min(-90), Validators.max(90)]),
    lng: new FormControl(0, [Validators.required, Validators.min(-180), Validators.max(180)])
  })

  constructor(private snackbar: MatSnackBar, public dialog: MatDialog) {
    if(localStorage.getItem("marcadores")){
      this.Marcadores = JSON.parse(localStorage.getItem('marcadores'))
    }
  }

  btnSave(){
    let cords = {
      lat: this.Form.get("lat").value,
      lng: this.Form.get("lng").value
    }

    this.newMarker(cords);
    this.Form.reset();

    this.Form.get("lat").setValue(0)
    this.Form.get("lng").setValue(0)
  }

  btnCancel(){
    this.Form.get("lat").setValue(0)
    this.Form.get("lng").setValue(0)
  }

  newMarker(coords){
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.Marcadores.push(nuevoMarcador);
    this.SaveLcStg();
    this.snackbar.open("Marcador agregado", "cerrar", {duration: 3000});
  }

  SaveLcStg(){
    localStorage.setItem("marcadores", JSON.stringify(this.Marcadores))
  }

  BorrarMarcador(index: number){
    this.Marcadores.splice(index,1);
    this.SaveLcStg();
    this.snackbar.open("Marcador borrado", "cerrar", {duration: 3000});
  }

  EditarMarcador(marcador:Marcador){
    const dialogRef = this.dialog.open(EditarComponent, {
      width:'250px',
      data: {
        Titulo: marcador.Titulo,
        Descripcion: marcador.Descripcion
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return;
      }
      marcador.Titulo = result.Titulo;
      marcador.Descripcion = result.Descripcion;
      this.SaveLcStg();
      this.snackbar.open("Marcador actualizado", "cerrar", {duration: 3000});
    });

  }
}
