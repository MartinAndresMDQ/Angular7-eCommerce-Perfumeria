import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})

export class LandingFixService {
   
  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  // Add or Remove class
  public addNavFix() {
     this.document.getElementById("mySidenav").classList.add('open-side');
  }

  public removeNavFix() {
     this.document.getElementById("mySidenav").classList.remove('open-side');
  }
  
  // For Header Two (add class layout-3)
  public addMenuTwo() {
     this.document.getElementById("mega-menu").classList.add('layout-3');
  }

  public removeMenuTwo() {
     this.document.getElementById("mega-menu").classList.remove('layout-3');
  }
  
  // For Header Three (add class center-mega-menu)
  public addMenuThree() {
     this.document.getElementById("mega-menu").classList.add('center-mega-menu');
  }

  public removeMenuThree() {
     this.document.getElementById("mega-menu").classList.remove('center-mega-menu');
  }
  
}
