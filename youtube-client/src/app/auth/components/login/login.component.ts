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
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          this.passwordValidator,
          this.passwordDigits,
          this.passwordLetters,
          this.passwordChars,
          this.passwordLength,
        ],
      ],
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
    return regExp.test(control.value)
      ? null
      : { passwordValidator: "Your password isn't strong enough. Password must contain:" };
  }

  passwordDigits(control: AbstractControl) {
    return /[a-z]\d|\d[a-z]/gi.test(control.value)
      ? null
      : { passwordDigits: 'a mixture of letters and numbers' };
  }

  passwordLetters(control: AbstractControl) {
    const hasLower = /[a-z]/g.test(control.value);
    const hasUpper = /[A-Z]/g.test(control.value);
    return hasLower && hasUpper
      ? null
      : {
          passwordLetters: 'a mixture of both uppercase and lowercase letters',
        };
  }

  passwordChars(control: AbstractControl) {
    return /[!@#$%^&*]/g.test(control.value)
      ? null
      : {
          passwordChars: 'inclusion of at least one special character, e.g., ! @ # ? ',
        };
  }

  passwordLength(control: AbstractControl) {
    return control.value.length >= 8
      ? null
      : {
          passwordLength: 'at least 8 characters',
        };
  }

  login() {
    if (this.loginForm.invalid) return;
    this.authService.login();
  }
}
