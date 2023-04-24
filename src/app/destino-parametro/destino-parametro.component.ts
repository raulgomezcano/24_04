import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destino-parametro',
  templateUrl: './destino-parametro.component.html',
  styleUrls: ['./destino-parametro.component.css']
})
export class DestinoParametroComponent {
  id=0
constructor( public activatedroute:ActivatedRoute, private router:Router){
  this.id=this.activatedroute.snapshot.params["id"]
}
volverComponente(){
  this.router.navigate(["un_atributo"])
}
}
