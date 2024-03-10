import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../../model/home-carousel/home-carousel.component';
import { HomeProductComponent } from '../../model/home-product/home-product.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeCarouselComponent, HomeProductComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
