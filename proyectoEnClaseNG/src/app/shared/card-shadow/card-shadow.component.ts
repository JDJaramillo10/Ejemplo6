import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosService } from 'src/app/servicios/recursos.service'; 
import { Foto } from 'src/app/interfaz/foto';

@Component({
    selector: 'app-card-shadow',
    imports: [CommonModule],
    providers: [RecursosService],
    templateUrl: './card-shadow.component.html',
    styleUrls: ['./card-shadow.component.css']
})
export class CardShadowComponent {
  titulo:string="CardShadow"

  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta =>{
      this.fotos = respuesta as Array<Foto>
    })
  }

  trackById(index:number, foto:any){
    return foto.id;
  }

}
