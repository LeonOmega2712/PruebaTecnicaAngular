import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarioIdentificado: boolean = false;

  usuarios: Usuario[] = [
    {
      correo: 'primero@uno.com',
      password: '123',
      rol: 'administrador',
    },
    {
      correo: 'segundo@dos.com',
      password: '321',
      rol: 'usuario',
    },
  ];

  constructor() {
    localStorage.getItem('usuarios') === null
      ? localStorage.setItem('usuarios', JSON.stringify(this.usuarios))
      : (this.usuarios = JSON.parse(localStorage.getItem('usuarios')!) || []);
  }

  registrarUsuario(usuario: Usuario) {
    this.usuarios = JSON.parse(localStorage.getItem('usuarios')!);
    this.usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  get listaUsuarios() {
    return this.usuarios;
  }

  identificarUsuario(usuario: Usuario): string {
    let rolDelUsuarioIdentificado: string = '';
    this.usuarios.forEach((usr) => {
      const usrPwd = JSON.stringify(`${usr.correo}${usr.password}`);
      const comparedUsrPwd = JSON.stringify(
        `${usuario.correo}${usuario.password}`
      );

      if (usrPwd.includes(comparedUsrPwd)) {
        this.usuarioIdentificado = true;
        rolDelUsuarioIdentificado = usr.rol;
      }
    });

    return rolDelUsuarioIdentificado;
  }
}
