import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-componente',
  templateUrl: './un-componente.component.html',
  styleUrls: ['./un-componente.component.css']
})
export class UnComponenteComponent {
constructor(private router:Router){}
id=0
enviarParametro(){
  this.router.navigate(['destino_parametro', this.id])
}
}
