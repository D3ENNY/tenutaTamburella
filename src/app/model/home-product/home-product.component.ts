import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss']
})

export class HomeProductComponent {
 
  oils: any[] = [
    {"imagePath": "../../../assets/img/oilBottle.png", "name": "Moresca"},
    {"imagePath": "../../../assets/img/oilBottle.png", "name": "Nocellare"},
  ]

  bottles: any[] = [
    {"imagePath": "../../../assets/img/oilBottle.png", "name": "bottiglia 250ml"},
    {"imagePath": "../../../assets/img/oilBottle.png", "name": "bottiglia 500ml"},
    {"imagePath": "../../../assets/img/oilBottle.png", "name": "bottiglia 750ml"},
    {"imagePath": "../../../assets/img/oilBottle.png", "name": "latta 5l"},
  ]
}