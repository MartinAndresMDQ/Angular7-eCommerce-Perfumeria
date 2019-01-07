import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { LandingFixService } from '../../services/landing-fix.service';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../services/windows.service';
import { CartItem } from '../../classes/cart-item';
import { CartService } from '../../services/cart.service';
import { Observable, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
declare var $: any;

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  public shoppingCartItems: CartItem[] = [];

  constructor(@Inject(DOCUMENT) private document: Document,
    private storage: AngularFireStorage,
    @Inject(WINDOW) private window, private fix: LandingFixService, private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => {
      this.shoppingCartItems = shoppingCartItems
      // for (let i of this.shoppingCartItems) {
      //   (<any>i.product.pictures[0]) = this.getImage(i.product.pictures[0])
      // }
    }
    );
  }

  // getImage(image) {
  //   const ref = this.storage.ref(image);
  //   let profileUrl: Observable<string | null>;
  //   profileUrl = ref.getDownloadURL();
  //   return profileUrl;
  //   // this.imagenes.push(profileUrl);
  // }
  ngOnInit() {
    this.smartMenu();
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
