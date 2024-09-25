import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router para la navegación

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedMode: string = ''; // Variable para almacenar el modo seleccionado

  constructor(private router: Router) {}

  // Método para manejar la selección del modo
  selectMode(mode: string) {
    this.selectedMode = mode; // Actualiza el modo seleccionado

    // Redirecciona basado en el modo seleccionado
    if (mode === 'transportador') {
      this.router.navigate(['/transportador']);
    } else if (mode === 'pasajero') {
      this.router.navigate(['/pasajero']);
    }
  }

  navegarLogin(){
    this.router.navigate(['/login']);}

}
