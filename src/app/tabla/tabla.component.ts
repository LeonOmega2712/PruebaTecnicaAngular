import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../interfaces/user.interface';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: [],
})
export class TablaComponent implements OnInit {
  rol: string = '';
  listaUsuarios: Usuario[] = [];
  tienePermiso: boolean = false;
  correoBuscado: string = '';
  coincidenciasDeBusqueda: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarios: UsuariosService,
    private router: Router
  ) {
    //FIXME: Implementar guard
    if (usuarios.usuarioIdentificado === false) {
      router.navigateByUrl('/login');
    }
    this.listaUsuarios = usuarios.listaUsuarios;
  }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(({ rol }) => {
      this.rol = rol;
      rol === 'administrador'
        ? (this.tienePermiso = true)
        : (this.tienePermiso = false);
      console.log(`rol del usuario logueado: ${rol}`);
    });
  }

  buscarUsuario() {
    this.coincidenciasDeBusqueda = [];
    this.listaUsuarios.forEach((usr) => {
      usr.correo.startsWith(this.correoBuscado)
        ? this.coincidenciasDeBusqueda.push(usr.correo)
        : console.log(`${this.correoBuscado} no coincide con ${usr.correo}`);
    });
    console.log(this.coincidenciasDeBusqueda);
  }
}
