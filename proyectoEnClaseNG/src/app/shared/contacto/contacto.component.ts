import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contacto',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
  titulo:string="Contactos"

  medios:any[] = [
    {"texto" : "En Twitter"},
    {"texto" : "En Facebook"},
    {"texto" : "Por correo electrónico"}
  ]
}
