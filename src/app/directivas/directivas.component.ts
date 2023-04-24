import { Component } from '@angular/core';
@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  nombre:string=""
  Lista:string[]=[]

  agregarCompi(){
    this.Lista.push(this.nombre)
  }
}
