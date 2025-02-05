import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-shadow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-shadow.component.html',
  styleUrls: ['./card-shadow.component.css']
})
export class CardShadowComponent {
  titulo:string="CardShadow"

  // Matriz 3x3 para generar los card containers
  cardContainers = [
    [
      { texto: 'Card 1-1', tiempo: '5 mins', descripcion: 'A brief introduction to the topic with insightful details.' },
      { texto: 'Card 1-2', tiempo: '6 mins', descripcion: 'Exploring the fundamentals with clear examples and use cases.' },
      { texto: 'Card 1-3', tiempo: '7 mins', descripcion: 'Providing essential context for better understanding and analysis.' }
    ],
    [
      { texto: 'Card 2-1', tiempo: '8 mins', descripcion: 'A deeper dive into the subject with practical applications.' },
      { texto: 'Card 2-2', tiempo: '9 mins', descripcion: 'Highlighting key points to enhance comprehension and retention.' },
      { texto: 'Card 2-3', tiempo: '10 mins', descripcion: 'Summarizing the main ideas with concise and relevant insights.' }
    ],
    [
      { texto: 'Card 3-1', tiempo: '11 mins', descripcion: 'An engaging discussion on challenges and possible solutions.' },
      { texto: 'Card 3-2', tiempo: '12 mins', descripcion: 'Breaking down complex concepts into easy-to-follow explanations.' },
      { texto: 'Card 3-3', tiempo: '13 mins', descripcion: 'Concluding with actionable steps and key takeaways.' }
    ]
  ];
}
