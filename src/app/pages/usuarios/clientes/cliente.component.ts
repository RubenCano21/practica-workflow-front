import {Component, OnInit} from '@angular/core';
import {Cliente} from "./cliente";
import {ClienteService} from "./cliente.service";
import {MatCard, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardFooter,
    MatIconButton,
    MatIcon,
    NgForOf
  ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() : void {
    this.clienteService.listarClientes().subscribe({
      next: (clientes: Cliente[]) => {
        this.clientes = clientes;
      },
      error: (error) => {
        console.error('Error al listar clientes', error);
        alert(error.error.message || "Error al listar clientes");
      }
    });
  }

  calcualarEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    const nacimiento =new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }



}
