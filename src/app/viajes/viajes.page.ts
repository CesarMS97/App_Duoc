import { Component, OnInit } from '@angular/core';
import { ConsumoapiService } from '../service/consumoapi.service'; // Servicio que consulta la API

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {
  viaje: any;

  constructor(private consultaApi: ConsumoapiService) {}

  ngOnInit() {
    this.obtenerViajeAsignado();
  }

  obtenerViajeAsignado() {
    this.consultaApi.getViajeAsignado().subscribe(
      (data) => {
        this.viaje = data; // Asignar los datos del viaje al usuario
      },
      (error) => {
        console.error('Error al obtener los detalles del viaje', error);
      }
    );
  }
}
