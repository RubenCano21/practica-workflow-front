import {Component, OnInit} from '@angular/core';
import {TramiteService} from "../tramite.service";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Tramite} from "../tramite";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent implements OnInit {

  tramites: Tramite[] = [];

  nuevoCodigo: string = '';

  codigo: string = '';
  nombre: string = '';
  descripcion: string = '';


  constructor(private registrarTramiteService: TramiteService) { }

  ngOnInit() : void{
    this.getTramites();
    this.generarCodigoTramite();
  }

  registrarTramite(form: NgForm): void {
    const formValue = form.value;

    const codigoGenerado = formValue.codigo || this.nuevoCodigo;

    const newTramite: Tramite = {
      id: 0,
      codigo: formValue.codigo,
      nombre: formValue.nombre,
      descripcion: formValue.descripcion
    }
    console.log('Nuevo tramite: ', newTramite);

    this.registrarTramiteService.registrarTramite(newTramite).subscribe({
      next: (response): void => {
        console.log('Tramite registrado: ', response);
        this.getTramites();
        form.reset();
        this.generarCodigoTramite();
      },
      error: (error) => {
        console.error('Error al registrar tramite: ', error);
      }
    });
  }

  getTramites(): void {
    this.registrarTramiteService.listarTramites().subscribe({
      next: (response: Tramite[]) => {
        console.log('Tramites: ', response);
        this.tramites = response;
      },
      error: (error) => {
        console.error('Error al obtener tramites: ', error);
      }
    })
  }

  generarCodigoTramite() {
    this.registrarTramiteService.obtenerUltimoCodigo().subscribe(
      (ultimoCodigo: string) => {
      this.nuevoCodigo = this.incrementarCodigo(ultimoCodigo);
      console.log('Nuevo código generado:', this.nuevoCodigo);
    });
  }



  incrementarCodigo(ultimoCodigo: string): string {
    const numero = parseInt(ultimoCodigo.replace('TRM', ''), 10); // Extrae el número
    const nuevoNumero = numero + 1; // Incrementa el número
    return `TRM${nuevoNumero.toString().padStart(3, '0')}`; // Formatea con ceros iniciales
  }

}
