import { Component } from '@angular/core';
import { Usuario } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  user: Usuario = {
    correo: '',
    password: '',
    rol: ''
  }

  validado: boolean = false;

  listaUsuarios: Usuario[] = []

  constructor(private router: Router, private usuarios: UsuariosService) {
    usuarios.usuarioIdentificado = false;
    this.listaUsuarios = usuarios.listaUsuarios;
    console.log(this.listaUsuarios)
  }

  iniciarSesion(): boolean {

    if (this.user.correo.length === 0) {
      this.validado = false;
      alert('Su correo esta vacío');
      return this.validado;
    }

    if (this.user.password.length === 0) {
      this.validado = false;
      alert('Contraseña invalida')
      return this.validado;
    }

    if (this.usuarios.identificarUsuario(this.user) === '') {
      alert('Usuario o contraseña incorrecta');
    }

    if (this.usuarios.identificarUsuario(this.user) === 'administrador') {
      this.router.navigateByUrl('/tabla/administrador');
      this.validado = true;
      return this.validado;
    }

    if (this.usuarios.identificarUsuario(this.user) === 'usuario') {
      this.router.navigateByUrl('/tabla/usuario');
      this.validado = true;
      return this.validado;
    }
    return this.validado;

  }

}
