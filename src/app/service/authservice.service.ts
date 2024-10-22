import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private isAuthenticated = false;
  private userRole: string = '';

  constructor(private http: HttpClient) {}

  // Cargar los usuarios desde el JSON
  loadUsers(): Observable<any> {
    return this.http.get('assets/data/usuarios.json');  // Ruta al archivo JSON
  }

  // Verificar credenciales de usuario
  login(username: string, password: string): Observable<any> {
    return this.loadUsers().pipe(
      map((users: any[]) => {
        const user = users.find(u => u.user === username && u.pass === password);
        if (user) {
          this.isAuthenticated = true;
          this.userRole = user.role;
          return { success: true, role: user.role };
        } else {
          return { success: false };
        }
      })
    );
  }

  // Métodos adicionales
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string {
    return this.userRole;
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = '';
  }


}
