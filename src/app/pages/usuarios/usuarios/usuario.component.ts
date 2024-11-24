import {Component, OnInit} from '@angular/core';
import {Usuario} from "./usuario";
import {UsuarioService} from "./usuario.service";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {AdminRolePipe} from "./admin-role.pipe";
import {RolesPipe} from "./roles.pipe";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    NgForOf,
    AdminRolePipe,
    RolesPipe,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit {

  usuarios : Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() : void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      },
      error: (error) => {
        console.error('Error al listar usuarios', error);
        alert(error.error.message || "Error al listar usuarios");
      }
    });
  }

  protected readonly Boolean = Boolean;
}
