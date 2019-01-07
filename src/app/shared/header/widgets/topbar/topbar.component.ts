import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  
  constructor(@Inject(AuthService) public authService: AuthService) {
    this.authService.logout();
  }
  ngOnInit() { }

}
