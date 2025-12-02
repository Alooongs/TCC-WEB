import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-doacao-alimentos',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './doacao-alimentos.component.html',
  styleUrls: ['./doacao-alimentos.component.css'],
})
export class DoacaoAlimentosComponent {
  currentIndex = 0;

  items = [
    { nome: 'Arroz', img: './arroz.png' },
    { nome: 'Feijão', img: './feijao.png' },
    { nome: 'Macarrão', img: './macarrao.png' },
    { nome: 'Açúcares', img: './acucar.png' },
  ];

  prevItem() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  nextItem() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }
}
