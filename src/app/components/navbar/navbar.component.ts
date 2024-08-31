import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
scroll:boolean=false;
@HostListener('window:scroll',[])
onScroll(){
  this.scroll=window.scrollY>30;
}
}
