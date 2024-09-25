import { Component, OnInit } from '@angular/core';

interface Ruta {
  puntoFinal: string;
  horaSalida: string;
  asientosDisponibles: number;
}
@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  searchTerm: string = '';
  rutas: Ruta[] = [
    { puntoFinal: 'San Bernardo', horaSalida: '22:00 PM', asientosDisponibles: 3 },
    { puntoFinal: 'San Cristóbal', horaSalida: '21:30 PM', asientosDisponibles: 1 },
    { puntoFinal: 'Puente Alto', horaSalida: '21:00 PM', asientosDisponibles: 2 },
    { puntoFinal: 'Renca', horaSalida: '20:30 PM', asientosDisponibles: 1 },
    // Aquí pueden agregarse más rutas
  ];

  constructor() { }

  filtrarRutas() {
    if (!this.searchTerm) return this.rutas;
    return this.rutas.filter(ruta =>
      ruta.puntoFinal.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ocuparCupo(ruta: Ruta) {
    if (ruta.asientosDisponibles > 0) {
      ruta.asientosDisponibles--;
    }
  }

  ngOnInit() {
  }

}
