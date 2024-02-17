import { Component } from '@angular/core'
import * as feather from 'feather-icons'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  ngAfterViewInit() {
    feather.replace();
  }
  
}
