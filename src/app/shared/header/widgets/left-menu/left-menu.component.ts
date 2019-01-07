import { Component, OnInit } from '@angular/core';
import { LandingFixService } from '../../../services/landing-fix.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private fix: LandingFixService) { }

  ngOnInit() { }

  closeNav() {
  	 this.fix.removeNavFix();
  }

}
