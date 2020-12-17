import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { EditarComponent } from './components/mapa/editar.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents:[
    EditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAs9UQs_3EeHW3klTZWPzeE-9s3tsUf-fk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
