import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  Form: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data: {Titulo:string, Descripcion:string},
              public dialogRef:MatDialogRef<EditarComponent>,
              public fb: FormBuilder) {
    console.log(data)
    this.Form = fb.group({
      "Titulo": data.Titulo,
      "Descripcion": data.Descripcion
    })
  }

  ngOnInit(): void {
  }

  Cancelar(){
    this.dialogRef.close();
  }

  Guardar(){
    this.dialogRef.close(this.Form.value);
  }
}
