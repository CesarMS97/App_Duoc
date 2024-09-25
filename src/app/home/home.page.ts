import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router para la navegación

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedMode: string = ''; // Variable para almacenar el modo seleccionado
  user: string = ''; // Variable para almacenar el nombre de usuario

  constructor(private router: Router) {
    // Recuperar el estado de la navegación, donde viene el usuario
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.user = navigation.extras.state['user']; // Obtener el nombre del usuario
    }
  }

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

  // Método para navegar de regreso al login
  navegarLogin(){
    this.router.navigate(['/login']);
  }

}
