import { Component } from '@angular/core';
import { CardShadowComponent } from '../card-shadow/card-shadow.component';
import { AlbumExampleComponent } from '../album-example/album-example.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardShadowComponent, AlbumExampleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo:string="home"

}
