import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private readonly authService: AuthService, private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  passwordValidator(control: AbstractControl) {
    const regExp = /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z!@#$%^&*]{8,}/g;
    return regExp.test(control.value) ? null : { passwordValidator: 'Password is invalid' };
  }

  login() {
    if (this.loginForm.invalid) return;
    this.authService.login();
  }
}
