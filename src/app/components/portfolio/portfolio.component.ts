import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imageList:string[]=[
    './assets/portfolio/poert1.png','./assets/portfolio/port2.png','./assets/portfolio/port3.png','./assets/portfolio/poert1.png','./assets/portfolio/port2.png','./assets/portfolio/port3.png'
  ]

  flag:boolean= true
  imgSrc:string=''
  hideImg(element:EventTarget|null , img:HTMLImageElement):void{
    if(element==img)return;
    this.flag=true;
  }

}
