import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private alertController: AlertController // Descomentado para usar las alertas
  ) {}

  // Función de navegación y autenticación
  async navegarExtras() {
    const user = this.usuario.get('user')?.value;
    const pass = this.usuario.get('pass')?.value;

    // Validamos si el usuario y la contraseña son correctos
    if (user === 'Cesar' && pass === '1234'
      || user === 'conductor' && pass === '1234'
      || user === 'pasajero' && pass === '1234'
      || user === 'test' && pass === '1234'
    ) {
      // Si son correctos, navegamos a la página de inicio
      let setData: NavigationExtras = {
        state: {
          user: user,
          pass: pass
        }
      };
      console.log(setData);
      this.router.navigate(['/home'], setData);
    } else {
      // Si no, mostramos una alerta de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario y/o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  ngOnInit() {
  }

}
