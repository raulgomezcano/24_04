import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  frase:string="hola"
  cambiarFrase(){
    if(this.frase=="hola"){
      this.frase="adios"
    }
    else if(this.frase=="adios"){
      this.frase="hola"
    }
  }
}
