import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthserviceService } from '../service/authservice.service'; // Asegúrate de importar el servicio correcto

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Formulario reactivo
  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthserviceService // Servicio de autenticación
  ) {}

  ngOnInit() {}

  // Función para manejar la autenticación y la navegación
  async navegarExtras() {
    const username = this.usuario.get('user')?.value;
    const password = this.usuario.get('pass')?.value;

    // Llamar al servicio de autenticación para verificar el usuario
    this.authService.login(username as string, password as string).subscribe(async (response) => {
      if (response.success) {
        // Si la autenticación es exitosa, redirigir según el rol
        let setData: NavigationExtras = {
          state: {
            user: username,
            role: response.role
          }
        };

        if (response.role === 'conductor') {
          this.router.navigate(['/homec'], setData);
        } else if (response.role === 'pasajero') {
          this.router.navigate(['/home'], setData);
        }
      } else {
        // Si las credenciales no son correctas, mostrar una alerta
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Usuario y/o contraseña incorrectos',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
