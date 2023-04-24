import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-holamundo-servicio',
  templateUrl: './holamundo-servicio.component.html',
  styleUrls: ['./holamundo-servicio.component.css']
})
export class HolamundoServicioComponent {
  frase:string=""
constructor(miServicio:ServicioService){
  this.frase=miServicio.holaServicio()
}
}
