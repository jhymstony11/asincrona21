import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Consumir el servicio AutenticacionService
  constructor(private autenticacion: AutenticacionService, private router: Router){}

  urlRedireccion = "";
  
  login(){
    this.autenticacion.login();
    this.urlRedireccion = this.autenticacion.urlUsuarioIntentaAcceder;
    this.autenticacion.urlUsuarioIntentaAcceder = "";
    this.router.navigate([this.urlRedireccion]);
  }

  usu = "";
  pass = "";
  deshabilitado = true;

  validacion(){
    if(this.usu !=="AD" || this.pass !== "123456"){
      this.deshabilitado = true;
    }
    else{
      this.deshabilitado = false;
    }
  }
     
  
}
