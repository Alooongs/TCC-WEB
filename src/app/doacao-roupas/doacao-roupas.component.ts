import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doacao-roupas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './doacao-roupas.component.html',
  styleUrls: ['./doacao-roupas.component.css'],
})
export class DoacaoRoupasComponent {
  itens = [
    { nome: 'Camiseta', imagem: './camiseta.png' },
    { nome: 'Calça', imagem: './calca.png' },
    { nome: 'Casaco', imagem: './casaco.png' },
  ];
  activeIndex = 0;

  nextItem() {
    this.activeIndex = (this.activeIndex + 1) % this.itens.length;
  }

  prevItem() {
    this.activeIndex =
      (this.activeIndex - 1 + this.itens.length) % this.itens.length;
  }

  cuidados = [
    'As roupas devem estar limpas.',
    'Evite peças rasgadas ou muito danificadas.',
    'Separe por tipo (infantil, adulto, inverno, verão).',
    'Dobre bem para facilitar o transporte.',
  ];
}
