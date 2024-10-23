import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.page.html',
  styleUrls: ['./homec.page.scss'],
})
export class HomecPage implements OnInit {

  selectedMode: string = ''; // Variable para almacenar el modo seleccionado
  user: string = '';

  constructor(private router: Router) {
    // Recuperar el estado de la navegación, donde viene el usuario
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.user = navigation.extras.state['user']; // Obtener el nombre del usuario
    }
  }
  ngOnInit() {
  }

  navegarTransportador() {
    this.router.navigate(['/transportador']);
  }

}
