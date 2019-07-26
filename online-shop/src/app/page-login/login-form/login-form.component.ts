import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthCredentials} from "../../models/auth-credentials";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Input() errorMessage: string;
  @Output() submitData: EventEmitter<any> = new EventEmitter();
  loginForm = this.formBuilder.group({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private formBuilder: FormBuilder) {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const payload = new AuthCredentials();
    payload.username = this.username.value;
    payload.password = this.password.value;
    this.submitData.emit(payload);
  }
}
