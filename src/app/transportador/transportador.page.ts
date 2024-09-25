import { Component, OnInit } from '@angular/core';

interface Ruta {
  puntoFinal: string;
  horaSalida: string;
  asientosDisponibles: number;
}
@Component({
  selector: 'app-transportador',
  templateUrl: './transportador.page.html',
  styleUrls: ['./transportador.page.scss'],
})
export class TransportadorPage implements OnInit {

  rutas: Ruta[] = [];
  nuevaRuta: Ruta = { puntoFinal: '', horaSalida: '', asientosDisponibles: 0 };

  constructor() { }

  crearRuta() {
    this.rutas.push({ ...this.nuevaRuta });
    this.nuevaRuta = { puntoFinal: '', horaSalida: '', asientosDisponibles: 0 }; // Reset form
  }

  cancelarRuta(ruta: Ruta) {
    this.rutas = this.rutas.filter(r => r !== ruta);
  }

  ngOnInit() {
  }

}
