import { Component, OnInit } from '@angular/core';

interface Ruta {
  puntoInicial: string;
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
    { puntoInicial: 'A', horaSalida: '12:00 PM', asientosDisponibles: 3 },
    { puntoInicial: 'B', horaSalida: '3:00 PM', asientosDisponibles: 0 },
    // Aquí pueden agregarse más rutas
  ];

  constructor() { }

  filtrarRutas() {
    if (!this.searchTerm) return this.rutas;
    return this.rutas.filter(ruta =>
      ruta.puntoInicial.toLowerCase().includes(this.searchTerm.toLowerCase())
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
