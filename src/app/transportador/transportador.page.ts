import { Component, OnInit } from '@angular/core';
import { ConsumoapiService } from '../service/consumoapi.service';

interface Ruta {
  nombreViaje: string;
  horaSalida: string;
  asientosDisponibles: number;
  destino: string;
  patente: string;
}

@Component({
  selector: 'app-transportador',
  templateUrl: './transportador.page.html',
  styleUrls: ['./transportador.page.scss'],
})
export class TransportadorPage implements OnInit {

  rutas: Ruta[] = [];
  nuevaRuta: Ruta = {
    nombreViaje: '',
    horaSalida: '',
    asientosDisponibles: 0,
    destino: '',
    patente: ''
  };

  constructor(private consumoApiService: ConsumoapiService) { }

  crearRuta() {
    // Envía la ruta a la API Flask para guardarla
    this.consumoApiService.guardarViaje(this.nuevaRuta).subscribe({
      next: (response) => {
        console.log('Respuesta de la API:', response);
        this.rutas.push({ ...this.nuevaRuta });
        this.nuevaRuta = {
          nombreViaje: '',
          horaSalida: '',
          asientosDisponibles: 0,
          destino: '',
          patente: ''
        };
      },
      error: (error) => {
        console.error('Error al guardar el viaje:', error);
      }
    });
  }

  cancelarRuta(ruta: Ruta) {
    this.rutas = this.rutas.filter(r => r !== ruta);
  }

  ngOnInit() {}
}
