import { Component, Inject, HostListener, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../services/landing-fix.service';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../services/windows.service';
import { CartItem } from '../../classes/cart-item';
import { CartService } from '../../services/cart.service';
import { Observable, of } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent implements OnInit, OnDestroy {

  public shoppingCartItems  :   CartItem[] = [];
  
  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,private fix: LandingFixService, private cartService: CartService) { 
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {
    this.smartMenu();
    this.fix.addMenuTwo();
  }

  ngOnDestroy() {
    this.fix.removeMenuTwo();
  }

  openNav() {
  	this.fix.addNavFix();
  }

  smartMenu() {
    $('#main-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
     });
    $('#sub-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
    })
  }

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
      if (number >= 300) { 
        this.document.getElementById("sticky").classList.add('fixed');
      } else {
        this.document.getElementById("sticky").classList.remove('fixed');
      }
  }

}
