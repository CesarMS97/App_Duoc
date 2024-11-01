import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {
  private apiUrl = 'http://127.0.0.1:5000'; // Cambia esto por la URL de tu API Python

  constructor(private http: HttpClient) {}


  getViajeAsignado(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/viaje-asignado`);
  }

  guardarViaje(viaje: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/guardar-viaje`, viaje);
  }
}