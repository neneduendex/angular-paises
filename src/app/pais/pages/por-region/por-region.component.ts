import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if(region == this.regionActiva) {return;}
    this.regionActiva = region;
    this.paises = [];
  }

  buscar(region: string) {
    this.regionActiva = region;
    this.paisService.buscarRegion(region)
      .subscribe(paises => {
        this.paises = paises;
      }, (err) => {
        this.paises = [];
      });
  }

  ngOnInit(): void {
  }

}
