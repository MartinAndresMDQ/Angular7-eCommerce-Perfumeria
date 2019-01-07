import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public slides: Observable<string | null>[] = [];
  public fotos: any[] = ['slide_1.png','slide_2.png'];

  constructor() {

  }

  ngOnInit() {   }

  // Slick slider config
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 3000
  };

}
