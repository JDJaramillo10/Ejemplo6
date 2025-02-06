import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { AlbumExampleComponent } from './shared/album-example/album-example.component';
import { CardShadowComponent } from './shared/card-shadow/card-shadow.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from './interfaz/foto';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, ContactoComponent, AlbumExampleComponent, CardShadowComponent, FooterComponent, HttpClientModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'proyectoEnClaseNG';

  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta =>{
      this.fotos = respuesta as Array<Foto>
    })
  }
}
