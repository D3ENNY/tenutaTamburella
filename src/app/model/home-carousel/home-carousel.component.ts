import { CommonModule } from '@angular/common'
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core'
import feather from 'feather-icons'
import { Carousel } from 'flowbite'

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
})
export class HomeCarouselComponent {
  
  @ViewChild('carouselRef', { static: true }) carouselEl!: ElementRef<HTMLDivElement>
  @ViewChildren('carouselItem') carouselItems!: QueryList<ElementRef>;

  carouselImage: string[] = [
    "../../../assets/img/uliveto.png",
    "../../../assets/img/uliveto2.jpeg", 
    "../../../assets/img/uliveto.png",
    "../../../assets/img/uliveto2.jpeg", 
    "../../../assets/img/uliveto.png",
  ]

  ngAfterViewInit(): void {
    const items: any[] = []

    this.carouselItems.forEach((item, index) => {
      items.push({ position: index, el: item?.nativeElement})
    })

    const options = {
      defaultPosition: 0,
      interval: 10000,
  
      indicators: {
        items: items,
      }
    }

    const instanceOptions = {
      id: 'default-carousel',
      override: true,
    }

    const carousel = new Carousel( this.carouselEl.nativeElement, items, options, instanceOptions)

    setInterval(() => {
      carousel?.next()
    },10000)

    feather.replace()
  }
}
