// import { Component, ViewEncapsulation, Inject, HostListener, OnInit, Input } from '@angular/core';
// import { LandingFixService } from '../services/landing-fix.service';
// import { DOCUMENT } from '@angular/platform-browser';
// import { WINDOW } from '../services/windows.service';
// declare var $: any;

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
//   encapsulation: ViewEncapsulation.None
// })
// export class HeaderComponent implements OnInit {

//   constructor(@Inject(DOCUMENT) private document: Document,
//     @Inject(WINDOW) private window,private fix: LandingFixService) { }

//   ngOnInit() {
//   	$.getScript('assets/js/script.js');
//     this.smartMenu();
//   }

//   openNav() {
//   	this.fix.addNavFix();
//   }

//   smartMenu() {
//     $('#main-menu').smartmenus({
//         subMenusSubOffsetX: 1,
//         subMenusSubOffsetY: -8
//       });
//     $('#sub-menu').smartmenus({
//       subMenusSubOffsetX: 1,
//       subMenusSubOffsetY: -8
//     })
//   }

//   // @HostListener Decorator
//   @HostListener("window:scroll", [])
//   onWindowScroll() {
//     let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
//       if (number >= 300) { 
//         this.document.getElementById("sticky").classList.add('fixed');
//       } else {
//         this.document.getElementById("sticky").classList.remove('fixed');
//       }
//   }

// }
