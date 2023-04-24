import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventoComponent } from './evento/evento.component';
import { ServicioService } from './servicio.service';
import { HolamundoServicioComponent } from './holamundo-servicio/holamundo-servicio.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { UnComponenteComponent } from './un-componente/un-componente.component';
import { DestinoParametroComponent } from './destino-parametro/destino-parametro.component';
import { DosAtributosComponent } from './dos-atributos/dos-atributos.component';
import { DosDestinoComponent } from './dos-destino/dos-destino.component';

const routes: Routes = [
  {path:"interpolacion",component:InterpolacionComponent},
  {path:"onewaybinding",component:OneWayBindingComponent},
  {path:"evento",component:EventoComponent},
  {path:"twowaybinding",component:TwowaybindingComponent},
  {path:"servicio",component:HolamundoServicioComponent},
  {path:"directivas", component:DirectivasComponent},
  {path:"un_atributo", component:UnComponenteComponent},
  {path:"destino_parametro/:id", component:DestinoParametroComponent},
  {path:"dos_atributos", component:DosAtributosComponent},
  {path:"dos_destino", component:DosDestinoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
