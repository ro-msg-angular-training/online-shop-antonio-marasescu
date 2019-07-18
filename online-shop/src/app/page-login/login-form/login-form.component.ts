import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Input() errorMessage: HttpErrorResponse;
  @Output() submitData: EventEmitter<any> = new EventEmitter();
  private loginForm = this.formBuilder.group({
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
    const payload = {username: this.username.value, password: this.password.value};
    this.submitData.emit(payload);
  }
}
