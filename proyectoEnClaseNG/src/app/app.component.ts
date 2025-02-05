import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { AlbumExampleComponent } from './shared/album-example/album-example.component';
import { CardShadowComponent } from './shared/card-shadow/card-shadow.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, ContactoComponent, AlbumExampleComponent, CardShadowComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'proyectoEnClaseNG';
}
