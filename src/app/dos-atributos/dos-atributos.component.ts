import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dos-atributos',
  templateUrl: './dos-atributos.component.html',
  styleUrls: ['./dos-atributos.component.css']
})
export class DosAtributosComponent {
  constructor(private router:Router){}
  id=0
  nombre=""
  enviarParametros(){
    this.router.navigate(['dos_destino'], {queryParams: {accionid:this.id, accionnombre:this.nombre}})
  }
}
