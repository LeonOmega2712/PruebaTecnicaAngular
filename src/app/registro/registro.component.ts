import { Component } from '@angular/core';
import { Usuario } from '../interfaces/user.interface';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent {
  validado: boolean = false;
  roleado: boolean = false;
  registrado: boolean = false;

  user: Usuario = {
    correo: '',
    password: '',
    rol: 'administrador',
  };

  roles: string[] = ['administrador', 'usuario'];

  constructor(private usuarios: UsuariosService) {
    usuarios.usuarioIdentificado = false;
    this.registrado = false;
  }

  registrar(): boolean {

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

    this.registrado = true;
    this.validado = true;
    this.usuarios.registrarUsuario(this.user);

    return this.validado;
  }
}
