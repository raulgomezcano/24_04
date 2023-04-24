import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dos-destino',
  templateUrl: './dos-destino.component.html',
  styleUrls: ['./dos-destino.component.css']
})
export class DosDestinoComponent {
  id=0
  nombre=""
constructor( public activatedroute:ActivatedRoute, private router:Router){
  this.id=this.activatedroute.snapshot.queryParams["accionid"]
  this.nombre=this.activatedroute.snapshot.queryParams["accionnombre"]
}
volverComponente(){
  this.router.navigate(["dos_atributos"])
}
}
