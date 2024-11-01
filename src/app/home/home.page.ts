import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router para la navegación
import { ConsumoapiService } from '../service/consumoapi.service';


interface Viaje {
  nombreViaje: string;
  horaSalida: string;
  asientosDisponibles: number;
  destino: string;
  patente: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedMode: string = ''; // Variable para almacenar el modo seleccionado
  user: string = ''; // Variable para almacenar el nombre de usuario
  viajes: Viaje[] = [];
  filteredViajes: Viaje[] = [];
  searchTerm: string = '';
  constructor(private router: Router , private consumoapiService: ConsumoapiService) {
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
  loadViajes() {
    this.consumoapiService.getViajeAsignado().subscribe({
      next: (response) => {
        this.viajes = response; // Asignar los viajes obtenidos de la API
        this.filteredViajes = this.viajes; // Inicialmente, mostrar todos los viajes
      },
      error: (error) => {
        console.error('Error al cargar los viajes:', error);
      }
    });
  }
  filterViajes() {
    this.filteredViajes = this.viajes.filter(viaje => 
      viaje.nombreViaje.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  tomarViaje() {
    // Implementa la lógica para tomar el viaje
    console.log('Tomando el viaje...');
  }

  // Método para navegar de regreso al login
  navegarLogin(){
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.loadViajes();
  }
}
