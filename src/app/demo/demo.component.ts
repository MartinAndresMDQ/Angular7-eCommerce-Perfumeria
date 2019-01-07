import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$.getScript('assets/js/script.js');
  }

}
