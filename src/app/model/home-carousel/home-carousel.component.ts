import { Component } from '@angular/core';
import feather from 'feather-icons';

import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {

  ngAfterViewInit(): void {
    feather.replace();
  }

}
