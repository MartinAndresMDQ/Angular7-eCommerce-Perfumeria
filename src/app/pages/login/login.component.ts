import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginForm: FormGroup;
  public error: any;
  submitted = false;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    @Inject(AuthService) private authService: AuthService,
    private ref:ChangeDetectorRef,
    private router: Router) {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.createForm();
  }
  get f() { return this.loginForm.controls; }

  createForm() {
    this.loginForm = this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const userCredentials = this.loginForm.value;
    this.authService.loginEmail(userCredentials.email, userCredentials.password).then(
      (data: firebase.auth.UserCredential) => {
        if (data != null) {
          this.authService.userG = data.user;
          this.authService.admin = this.authService.isAdmin();
          this.ref.detectChanges();
          console.log(this.authService.userG)
          this.router.navigate(['/home']);
        }
      }
    );
  }
}
