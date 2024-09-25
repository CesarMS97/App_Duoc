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

  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  constructor(
    private router: Router,
/*     private alertController: AlertController,
    private fb: FormBuilder */
  ) {

/*     this.usuario = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      pass: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    }) */
  }

  navegarExtras(){
    let setData: NavigationExtras = {
      state: {
        user: this.usuario.value.user,
        pass: this.usuario.value.pass
      }
    };
    console.log(setData);
    this.router.navigate(['/home'], setData);
  }
/*   async navegarExtras() {
    const user = this.usuario.get('user').value;
    const pass = this.usuario.get('pass').value;

    if (user === 'Cesar' && pass === '1234') {
      // Si el usuario y contraseña son correctos, navega al home y pasa el nombre del usuario
      this.router.navigate(['/home'], { queryParams: { nombre: user } });
    } else {
      // Si el login es incorrecto, muestra un mensaje de alerta
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario y/o contraseña incorrecta',
        buttons: ['OK']
      });
      await alert.present();
    }
  } */

  ngOnInit() {
  }

}
