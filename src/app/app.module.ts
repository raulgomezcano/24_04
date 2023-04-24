import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventoComponent } from './evento/evento.component';
import { HolamundoServicioComponent } from './holamundo-servicio/holamundo-servicio.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { UnComponenteComponent } from './un-componente/un-componente.component';
import { DestinoParametroComponent } from './destino-parametro/destino-parametro.component';
import { DosAtributosComponent } from './dos-atributos/dos-atributos.component';
import { DosDestinoComponent } from './dos-destino/dos-destino.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OneWayBindingComponent,
    EventoComponent,
    HolamundoServicioComponent,
    TwowaybindingComponent,
    DirectivasComponent,
    UnComponenteComponent,
    DestinoParametroComponent,
    DosAtributosComponent,
    DosDestinoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
