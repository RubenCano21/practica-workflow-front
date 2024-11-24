import {Component, OnInit} from '@angular/core';
import {Tramite} from "../tramite";
import {TramiteService} from "../tramite.service";
import {MatCard, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tramite',
  standalone: true,
  imports: [
    MatCard,
    MatCardFooter,
    MatCardHeader,
    MatIcon,
    MatIconButton,
    NgForOf
  ],
  templateUrl: './tramite.component.html',
  styleUrl: './tramite.component.scss'
})
export class TramiteComponent implements OnInit {

  tramites: Tramite[] = [];

  constructor(private tramitesService: TramiteService) {}

  ngOnInit(): void {
      this.listaTramites();
  }

  listaTramites():void {
    this.tramitesService.listarTramites().subscribe({
      next: (tramites: Tramite[]) => {
        this.tramites = tramites;
      },
      error: (error) => {
        console.error('Error al listar tramites', error);
        alert(error.error.message || "Error al listar tramites");
      }
    });
  }


}
