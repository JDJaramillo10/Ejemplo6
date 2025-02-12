import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Datos } from 'src/app/interfaz/datos';
import { DatoSeleccionado } from 'src/app/interfaz/dato-seleccionado';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [CommonModule],
  providers: [DatosService],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  titulo:string="Datos"

  datos: Datos[] = [];
  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.datosService.obtenerDatos().subscribe(respuesta => {
      this.datos = respuesta as Datos[];
    });
  }

  datoSeleccionado:  DatoSeleccionado[] = [];

  onIconClick(id: number): void {
    this.datosService.obtenerDatosPorId(id).subscribe(respuesta => {
      this.datoSeleccionado = respuesta as DatoSeleccionado[];
    });
    console.log(`Se presionó el ícono del ID: ${id}`);
  }
  
  
}
