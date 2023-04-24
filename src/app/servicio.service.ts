import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }
  holaServicio(){
    return "hola mundo (servicio)"
  }
}
