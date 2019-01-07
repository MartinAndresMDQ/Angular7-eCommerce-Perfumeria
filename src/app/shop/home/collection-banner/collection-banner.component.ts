import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-banner',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // Collection banner
  public category = [{
    image: 'assets/images/sub-banner1.jpg',
    save: 'Ahorra 50%',
    title: 'Hombre',
    link: '/home/left-sidebar/collection/Hombre'
  }, {
    image: 'assets/images/sub-banner2.jpg',
    save: 'Ahorra 50%',
    title: 'Mujer',
    link: '/home/left-sidebar/collection/Mujer'
  }]

}
