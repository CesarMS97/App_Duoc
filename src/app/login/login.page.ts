import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

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

  constructor(private router: Router) { }

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
    

  ngOnInit() {
  }

}
