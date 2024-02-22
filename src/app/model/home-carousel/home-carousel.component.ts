import { Component, ElementRef, ViewChild } from '@angular/core';
import feather from 'feather-icons';
import { Carousel } from 'flowbite';


@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent{

  @ViewChild('carouselRef', {static:true}) carouselEl: ElementRef<HTMLDivElement> | null
  @ViewChild('itemOneRef', {static:true}) item1El: ElementRef<HTMLDivElement> | null
  @ViewChild('itemTwoRef', {static:true}) item2El: ElementRef<HTMLDivElement> | null
  @ViewChild('itemTwoRef', {static:true}) item3El: ElementRef<HTMLDivElement> | null
  @ViewChild('itemTwoRef', {static:true}) item4El: ElementRef<HTMLDivElement> | null
  @ViewChild('itemTwoRef', {static:true}) item5El: ElementRef<HTMLDivElement> | null
  carousel: Carousel | null = null

  constructor() {
    this.carouselEl = null
    this.item1El = null
    this.item2El = null
    this.item3El = null
    this.item4El = null
    this.item5El = null
  }

  ngAfterViewInit(): void {
    feather.replace();

    if (this.carouselEl /*&& this.item1El && this.item2El && this.item3El && this.item4El && this.item5El*/){
      this.carousel = new Carousel(
        //element
        this.carouselEl.nativeElement, 
        //items
        [
          // { position: 0, el: this.item1El.nativeElement },
          // { position: 1, el: this.item2El.nativeElement },
          // { position: 2, el: this.item3El.nativeElement },
          // { position: 3, el: this.item4El.nativeElement },
          // { position: 4, el: this.item5El.nativeElement },
        ], 
        //options
        {
          defaultPosition: 0,
          interval: 10000,
        },
        //istance options
        {
          id: 'default-carousel',
          override: true
        }
      )
    }
  }

}
