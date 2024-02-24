import { Component, ElementRef, ViewChild } from '@angular/core'
import feather from 'feather-icons'
import { Carousel } from 'flowbite'

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
})
export class HomeCarouselComponent {
  
  @ViewChild('carouselRef', { static: true }) carouselEl!: ElementRef<HTMLDivElement>
  @ViewChild('itemZeroRef', { static: true }) item0El!: ElementRef<HTMLDivElement>
  @ViewChild('itemOneRef', { static: true }) item1El!: ElementRef<HTMLDivElement>
  @ViewChild('itemTwoRef', { static: true }) item2El!: ElementRef<HTMLDivElement>
  @ViewChild('itemThreeRef', { static: true }) item3El!: ElementRef<HTMLDivElement>
  @ViewChild('itemFourRef', { static: true }) item4El!: ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {
    const items = [
      { position: 0, el: this.item0El?.nativeElement },
      { position: 1, el: this.item1El?.nativeElement },
      { position: 2, el: this.item2El?.nativeElement },
      { position: 3, el: this.item3El?.nativeElement }, 
      { position: 4, el: this.item4El?.nativeElement }
    ]
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
